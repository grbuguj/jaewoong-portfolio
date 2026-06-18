'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/animations';
import { BASE_NODES, BASE_EDGES, CAT, GraphNode } from '@/data/graph';

export default function GraphView() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [d3Loaded, setD3Loaded] = useState(false);

  useEffect(() => {
    import('d3').then((d3) => {
      setD3Loaded(true);
      const svg = d3.select(svgRef.current!);
      svg.selectAll('*').remove();

      const W = svgRef.current!.clientWidth || 900;
      const H = svgRef.current!.clientHeight || 560;

      const nodes: GraphNode[] = BASE_NODES.map((n) => ({ ...n }));
      const idSet = new Set(nodes.map((n) => n.id));
      const links = BASE_EDGES.map(([s, t]) => ({ source: s, target: t })).filter(
        (l) => idSet.has(l.source) && idSet.has(l.target)
      );

      const adj: Record<string, Set<string>> = {};
      nodes.forEach((n) => { adj[n.id] = new Set([n.id]); });
      links.forEach((l) => {
        adj[l.source as string].add(l.target as string);
        adj[l.target as string].add(l.source as string);
      });

      const colorOf = (n: GraphNode) =>
        n.group === 'self' ? '#0f172a' : n.cat && CAT[n.cat] ? CAT[n.cat].color : '#888';

      const root = svg.append('g');

      const zoom = d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.3, 3.5])
        .on('zoom', (ev) => root.attr('transform', ev.transform));
      svg.call(zoom);

      const edge = root.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0.6);

      const node = root.append('g')
        .selectAll<SVGGElement, GraphNode>('g')
        .data(nodes, (d) => d.id)
        .join('g')
        .style('cursor', 'pointer')
        .call(
          d3.drag<SVGGElement, GraphNode>()
            .on('start', (ev, d) => { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
            .on('drag', (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
            .on('end', (ev, d) => { if (!ev.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
        );

      node.append('circle')
        .attr('r', (d) => d.r)
        .attr('fill', (d) => colorOf(d))
        .attr('fill-opacity', (d) => (d.group === 'sub' ? 0.92 : 1))
        .attr('stroke', '#fff')
        .attr('stroke-width', (d) => (d.group === 'self' ? 2.5 : 1.5));

      node.append('text')
        .attr('dy', (d) => d.r + 11)
        .attr('text-anchor', 'middle')
        .attr('font-size', (d) => (d.group === 'self' ? 14 : d.group === 'cat' ? 12 : 10))
        .attr('font-weight', (d) => (d.group === 'self' || d.group === 'cat' ? '600' : '400'))
        .attr('fill', '#475569')
        .attr('paint-order', 'stroke')
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('pointer-events', 'none')
        .text((d) => d.label);

      node
        .on('mouseenter', (_, d) => {
          const near = adj[d.id];
          node.select('circle').attr('opacity', (n) => (near.has(n.id) ? 1 : 0.15));
          edge.attr('opacity', (l) => {
            const s = (l.source as GraphNode).id;
            const t = (l.target as GraphNode).id;
            return s === d.id || t === d.id ? 1 : 0.05;
          }).attr('stroke', (l) => {
            const s = (l.source as GraphNode).id;
            const t = (l.target as GraphNode).id;
            return s === d.id || t === d.id ? '#ff8a3d' : '#cbd5e1';
          }).attr('stroke-width', (l) => {
            const s = (l.source as GraphNode).id;
            const t = (l.target as GraphNode).id;
            return s === d.id || t === d.id ? 2 : 1;
          });
        })
        .on('mouseleave', () => {
          node.select('circle').attr('opacity', 1);
          edge.attr('opacity', 0.6).attr('stroke', '#cbd5e1').attr('stroke-width', 1);
        })
        .on('click', (ev, d) => {
          ev.stopPropagation();
          setSelected(d);
        });

      svg.on('click', () => setSelected(null));

      const sim = d3.forceSimulation<GraphNode>(nodes)
        .force('link', d3.forceLink(links).id((d) => (d as GraphNode).id)
          .distance((l) => {
            const sg = (l.source as GraphNode).group;
            const tg = (l.target as GraphNode).group;
            if (sg === 'self' || tg === 'self') return 125;
            if (sg === 'cat' || tg === 'cat') return 68;
            return 92;
          }).strength(0.5))
        .force('charge', d3.forceManyBody().strength((d) =>
          (d as GraphNode).group === 'self' ? -950 : (d as GraphNode).group === 'cat' ? -540 : -235
        ))
        .force('center', d3.forceCenter(W / 2, H / 2))
        .force('collide', d3.forceCollide().radius((d) => (d as GraphNode).r + 15));

      sim.on('tick', () => {
        edge
          .attr('x1', (l) => (l.source as GraphNode).x ?? 0)
          .attr('y1', (l) => (l.source as GraphNode).y ?? 0)
          .attr('x2', (l) => (l.target as GraphNode).x ?? 0)
          .attr('y2', (l) => (l.target as GraphNode).y ?? 0);
        node.attr('transform', (d) => `translate(${d.x ?? 0},${d.y ?? 0})`);
      });

      return () => { sim.stop(); };
    });
  }, []);

  return (
    <section id="graph" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Knowledge Graph
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            개발자 김재웅의 지식 그래프
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-sm mb-8 font-mono">
            drag · scroll zoom · click node
          </motion.p>

          <div className="relative rounded-2xl border border-slate-200 overflow-hidden bg-white">
            <svg
              ref={svgRef}
              className="w-full"
              style={{ height: 560, cursor: 'grab' }}
            />

            {/* Side panel */}
            {selected && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute top-4 right-4 w-64 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-lg"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-md border border-slate-200 text-slate-400 hover:text-slate-700 text-xs flex items-center justify-center"
                >
                  ✕
                </button>
                {selected.kicker && (
                  <p
                    className="text-[10px] font-mono tracking-widest uppercase mb-1"
                    style={{ color: selected.cat && CAT[selected.cat] ? CAT[selected.cat].color : '#ff8a3d' }}
                  >
                    {selected.kicker}
                  </p>
                )}
                <h3 className="font-bold text-slate-900 text-[15px] mb-1">{selected.label}</h3>
                {selected.meta && <p className="text-[11px] text-slate-400 font-mono mb-2">{selected.meta}</p>}
                {selected.body && <p className="text-[12px] text-slate-600 leading-relaxed mb-3">{selected.body}</p>}
                {selected.stack && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {selected.stack.map((s) => (
                      <span key={s} className="text-[10px] px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-slate-500 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {selected.url && (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-orange-500 hover:text-orange-600"
                  >
                    ↗ 바로가기
                  </a>
                )}
              </motion.div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1.5 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl p-3">
              {Object.entries(CAT).map(([, v]) => (
                <div key={v.name} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: v.color }} />
                  <span className="text-[11px] text-slate-500">{v.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

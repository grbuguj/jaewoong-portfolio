'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations';
import { projects, ProjectCategory } from '@/data/projects';

type Filter = 'ALL' | ProjectCategory;

const filters: { key: Filter; label: string }[] = [
  { key: 'ALL', label: '전체' },
  { key: 'BE', label: 'Backend' },
  { key: 'FS', label: 'Fullstack' },
  { key: 'FE', label: 'Frontend' },
];

const catColor: Record<ProjectCategory, string> = {
  BE: 'bg-orange-100 text-orange-600',
  FS: 'bg-violet-100 text-violet-600',
  FE: 'bg-cyan-100 text-cyan-600',
};

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = projects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'FE') return p.category === 'FE' || p.category === 'FS';
    if (filter === 'BE') return p.category === 'BE' || p.category === 'FS';
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Projects
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            프로젝트
          </motion.h2>

          {/* Filter tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                  filter === f.key
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`group relative flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 overflow-hidden ${
                    p.highlight ? 'ring-1 ring-orange-200' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full h-40 bg-slate-100 overflow-hidden shrink-0">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background:
                            p.category === 'BE'
                              ? 'linear-gradient(135deg, #fff4ec, #ffe4cc)'
                              : p.category === 'FS'
                              ? 'linear-gradient(135deg, #f3f0ff, #e8e0ff)'
                              : 'linear-gradient(135deg, #e8f9fd, #d0f0f8)',
                        }}
                      >
                        <span className="text-3xl opacity-30">
                          {p.category === 'BE' ? '⚙️' : p.category === 'FS' ? '🗺️' : '📱'}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{
                        background:
                          p.category === 'BE' ? '#ff8a3d' : p.category === 'FS' ? '#a98bff' : '#43c6e8',
                      }}
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    {/* Title row */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-base leading-tight truncate">{p.title}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 ml-2 shrink-0">
                        {p.instagram && (
                          <a href={p.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-900 hover:bg-pink-50 hover:text-pink-500 transition-all duration-150">
                            <IconInstagram />
                          </a>
                        )}
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" title="사이트 바로가기"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-900 hover:bg-orange-50 hover:text-orange-500 transition-all duration-150">
                            <IconExternal />
                          </a>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition-all duration-150">
                            <IconGithub />
                          </a>
                        )}
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${catColor[p.category]}`}>
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <p className="text-[12px] text-slate-400 font-mono">{p.subtitle}</p>
                      <span className="text-slate-200 text-[10px]">·</span>
                      <p className="text-[11px] text-slate-400 font-mono">{p.date}</p>
                      {p.live && (
                        <span className="shrink-0 flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                          운영중
                        </span>
                      )}
                      {p.wip && (
                        <span className="shrink-0 flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-500 border border-blue-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
                          개발중
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 flex-1">{p.description}</p>

                    {/* Bottom */}
                    <div className="mt-4 space-y-3">
                      {/* Stack */}
                      <div className="flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-none" style={{scrollbarWidth:'none'}}>
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md text-slate-500 font-mono whitespace-nowrap shrink-0"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Role toggle */}
                      <div className="pt-1.5 border-t border-slate-100">
                        <button
                          onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                          className="w-full flex items-center justify-center py-px rounded text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all duration-150"
                        >
                          <svg viewBox="0 0 24 24" className={`w-4 h-4 transition-transform duration-200 ${expanded === p.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded === p.id && (
                            <motion.div
                              key="role"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <p className="text-[13px] text-slate-600 leading-relaxed mt-2">{p.takeaway}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

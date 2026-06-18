'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { skillCategories } from '@/data/skills';

const levelStyle: Record<string, string> = {
  main: 'bg-orange-100 text-orange-600',
  mid: 'bg-slate-100 text-slate-600',
  learning: 'bg-blue-50 text-blue-500',
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Skills
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            기술 스택
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <motion.div key={cat.key} variants={fadeInUp}>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: cat.color }}
                  />
                  <h3 className="font-semibold text-slate-700 text-[13px] uppercase tracking-wider">
                    {cat.label}
                  </h3>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm bg-white transition-all duration-200 cursor-default"
                      onMouseEnter={() => setHoveredSkill(`${cat.key}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">{skill.name}</span>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${levelStyle[skill.level]}`}>
                          {skill.levelLabel}
                        </span>
                      </div>
                      {hoveredSkill === `${cat.key}-${skill.name}` && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-[12px] text-slate-500 mt-2 leading-relaxed"
                        >
                          {skill.description}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

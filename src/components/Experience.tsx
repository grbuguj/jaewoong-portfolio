'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { experiences } from '@/data/experience';

const typeStyle: Record<string, { dot: string; badge: string; label: string }> = {
  career:   { dot: 'bg-orange-400', badge: 'bg-orange-50 text-orange-500 border-orange-100',  label: 'Career' },
  award:    { dot: 'bg-yellow-400', badge: 'bg-yellow-50 text-yellow-600 border-yellow-100',  label: 'Award' },
  research: { dot: 'bg-green-400',  badge: 'bg-green-50 text-green-600 border-green-100',     label: 'Research' },
  activity: { dot: 'bg-violet-400', badge: 'bg-violet-50 text-violet-600 border-violet-100',  label: 'Activity' },
  education:{ dot: 'bg-sky-400',    badge: 'bg-sky-50 text-sky-600 border-sky-100',           label: 'Education' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Experience
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            경력 및 활동
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
            {experiences.map((item) => {
              const ts = typeStyle[item.type];
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-[15px] leading-snug">{item.title}</h3>
                    <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-mono ${ts.badge}`}>
                      {ts.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-[12px] text-slate-400 font-mono">{item.subtitle}</p>
                    <span className="text-slate-200 text-[10px]">·</span>
                    <p className="text-[12px] text-slate-400 font-mono">{item.date}</p>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md text-slate-500 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

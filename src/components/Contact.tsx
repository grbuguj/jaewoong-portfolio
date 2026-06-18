'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Contact
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            연락하기
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 mb-10 max-w-md mx-auto">
            협업 제안, 질문, 커피챗 등 언제든지 연락주세요.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="mailto:bugs0613@naver.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg"
            >
              ✉ bugs0613@naver.com
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center gap-4 mt-8">
            {[
              { label: 'GitHub', url: 'https://github.com/grbuguj' },
              { label: 'Velog', url: 'https://velog.io/@bugs0613' },
              { label: '횃불이유괴단', url: 'https://torchers-web.vercel.app' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

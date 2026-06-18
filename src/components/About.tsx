'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const slides = [
  { id: 'minecraft', src: '/about/minecraft.png', caption: '2015년 - 마인크래프트 서버 운영' },
  { id: 'service',   src: '/about/service.png',   caption: '야구맵 · 횃불이유괴단' },
  { id: 'award',     src: '/about/award.jpeg',     caption: 'GenAI 공공데이터 최우수상' },
];

function AboutCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + slides.length) % slides.length);
  const next = () => go((idx + 1) % slides.length);

  const current = slides[idx];

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 select-none">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current.id}
          custom={dir}
          initial={{ x: dir * 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: dir * -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {!imgErrors[current.id] ? (
            <Image
              src={current.src}
              alt={current.caption}
              fill
              className="object-cover"
              onError={() => setImgErrors((e) => ({ ...e, [current.id]: true }))}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
              <span className="text-[13px] font-mono text-slate-300 tracking-widest">{current.caption}</span>
            </div>
          )}
          {/* caption */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white text-[12px] font-medium">{current.caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors z-10"
        aria-label="이전"
      >
        <span className="text-slate-700 text-sm">‹</span>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors z-10"
        aria-label="다음"
      >
        <span className="text-slate-700 text-sm">›</span>
      </button>

      {/* dots */}
      <div className="absolute bottom-9 right-3 flex gap-1.5 z-10">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
              About Me
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              안녕하세요,<br />개발자 김재웅입니다.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-4">
              초등학생 때 마인크래프트 서버를 직접 열고, 트리거 구문부터 도메인 연결까지 독학으로
              파고들었습니다. 그때부터 만들고 싶은 게 생기면 직접 구현하는 게 습관이 됐습니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed">
              지금은 창업동아리{' '}
              <a
                href="https://torchers-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 underline underline-offset-2 decoration-orange-300 hover:decoration-orange-500 transition-colors"
              >
                횃불이유괴단
              </a>{' '}
              팀장으로 여러 서비스를 기획·개발하며 야구맵을 직접 운영하고 있습니다.
              졸업작품으로는 멀티에이전트 금융 시뮬레이션 시스템 AI Finance World를 설계 중입니다.
            </motion.p>
          </div>

          {/* Right — carousel */}
          <motion.div variants={fadeInUp}>
            <AboutCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

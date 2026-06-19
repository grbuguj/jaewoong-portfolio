'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const typingWords = ['백엔드 개발자', '풀스택 개발자'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [profileError, setProfileError] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % typingWords.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-14"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-12 md:gap-20">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[13px] font-mono tracking-widest text-orange-400 uppercase"
            >
              Backend → Fullstack Developer
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-none"
            >
              김재웅
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-2xl md:text-3xl text-slate-600 font-medium h-10">
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-7 bg-orange-400 ml-1 animate-pulse align-middle" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed"
            >
              백엔드를 중심으로 서비스를 기획하고 운영합니다.<br />
              <span className="text-slate-800 font-semibold">금융 도메인</span>에 관심이 많고,<br />
              잘 설계된 시스템이 서비스를 어떻게 버티는지 파고듭니다.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/grbuguj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kimjaeung-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://velog.io/@bugs0613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                Velog
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-300 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition-colors"
              >
                프로젝트 보기 →
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          {!profileError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:block shrink-0"
            >
              <div className="w-48 lg:w-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/profile.png"
                  alt="김재웅"
                  width={224}
                  height={299}
                  className="w-full h-full object-cover object-top"
                  priority
                  onError={() => setProfileError(true)}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[11px] text-slate-300 tracking-widest font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 bg-slate-200 rounded"
        />
      </motion.div>
    </section>
  );
}

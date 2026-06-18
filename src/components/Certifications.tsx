'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const certs = [
  { id: 'gisa',  name: '정보처리기사',           org: '한국산업인력공단',      date: '2026.06' },
  { id: 'dasp',  name: 'DAsP',                  org: '한국데이터산업진흥원',   date: '2026.04' },
  { id: 'sqld',  name: 'SQLD',                  org: '한국데이터산업진흥원',   date: '2025.12' },
  { id: 'gda',   name: 'Google Data Analytics', org: 'Google · Coursera',   date: '2025.02' },
  { id: 'adsp',  name: 'ADsP',                  org: '한국데이터산업진흥원',   date: '2024.11' },
];

function CertCard({ cert }: { cert: typeof certs[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      className="flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-orange-200 transition-all duration-200 overflow-hidden cursor-default"
    >
      <div className="relative w-full aspect-[3/2] bg-slate-50">
        {!imgError ? (
          <Image
            src={`/certs/${cert.id}.png`}
            alt={cert.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <span className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">cert</span>
          </div>
        )}
      </div>
      <div className="p-3 text-center">
        <p className="font-semibold text-slate-800 text-[13px] leading-tight mb-0.5">{cert.name}</p>
        <p className="text-[10px] text-slate-400 font-mono">{cert.date}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeInUp} className="text-[11px] font-mono tracking-widest text-orange-400 uppercase mb-3">
            Certifications
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            자격증
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certs.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '김재웅 · 개발자 포트폴리오',
  description: '백엔드 베이스에서 풀스택으로 전환 중인 개발자 김재웅의 포트폴리오입니다.',
  keywords: ['김재웅', '포트폴리오', '백엔드', 'Spring Boot', 'React', '핀테크'],
  openGraph: {
    title: '김재웅 · 개발자 포트폴리오',
    description: '백엔드 베이스에서 풀스택으로 전환 중인 개발자 김재웅의 포트폴리오입니다.',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}

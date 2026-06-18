export interface Skill {
  name: string;
  level: 'main' | 'mid' | 'learning';
  levelLabel: string;
  description: string;
}

export interface SkillCategory {
  key: string;
  label: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'backend',
    label: 'Backend',
    color: '#ff8a3d',
    skills: [
      { name: 'Spring Boot', level: 'main', levelLabel: '메인 스택', description: '대부분의 프로젝트를 Spring Boot/Java로 설계·구현' },
      { name: 'Java', level: 'main', levelLabel: '메인 스택', description: 'OOP, 동시성 제어, JPA 활용' },
      { name: 'MySQL / MariaDB', level: 'mid', levelLabel: '중급', description: '트랜잭션, 스키마 설계, 쿼리 최적화' },
      { name: 'Redis', level: 'mid', levelLabel: '활용', description: '야구맵 이미지 캐싱에 활용' },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    color: '#43c6e8',
    skills: [
      { name: 'React', level: 'mid', levelLabel: '입문 → 실전', description: '야구맵 FE 직접 구현. 풀스택 전환 중' },
      { name: 'Next.js', level: 'mid', levelLabel: '활용', description: '한칸서울, 이 포폴 사이트 구현' },
      { name: 'TypeScript', level: 'mid', levelLabel: '활용', description: '타입 안전성 기반 개발' },
    ],
  },
  {
    key: 'infra',
    label: 'Infra / Tools',
    color: '#a98bff',
    skills: [
      { name: 'AWS EC2 / Nginx', level: 'mid', levelLabel: '활용', description: 'EC2 인스턴스 운영, Nginx 리버스 프록시' },
      { name: 'Docker', level: 'mid', levelLabel: '활용', description: '컨테이너 기반 배포' },
      { name: 'Git / GitHub', level: 'main', levelLabel: '메인', description: '협업 및 버전 관리' },
    ],
  },
  {
    key: 'data',
    label: 'Data / AI',
    color: '#5ad9a0',
    skills: [
      { name: 'Python', level: 'mid', levelLabel: '활용', description: '데이터 분석, 연구실 작업' },
    ],
  },
];

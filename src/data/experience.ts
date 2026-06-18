export interface ExperienceItem {
  id: string;
  type: 'award' | 'activity' | 'research' | 'career' | 'education';
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'torch',
    type: 'activity',
    title: '횃불이유괴단 팀장',
    subtitle: '창업동아리 · 7인 팀',
    date: '2026.3 ~',
    description: '"트렌드를 서비스로 만든다, 릴스로 터트린다" 슬로건의 창업동아리. 팀장으로 기획부터 백엔드까지 맡으며 여러 서비스를 직접 운영.',
    tags: ['팀장', '기획', '백엔드'],
  },
  {
    id: 'genai',
    type: 'award',
    title: 'GenAI 공공데이터 리빙랩 최우수상',
    subtitle: 'AWS · GenAI 공공데이터 경진대회',
    date: '2026.02',
    description: 'GenAI 공공데이터 리빙랩 아이디어 경진대회 최우수상. PM 겸 백엔드로 매장 운영 의사결정 보조 시스템 구현.',
    tags: ['AWS', 'PM', '최우수상'],
  },
  {
    id: 'ta',
    type: 'career',
    title: '프로그래밍(2) 과목 TA',
    subtitle: '인천대학교 정보통신공학과',
    date: '2025.9 ~ 12',
    description: '정보통신공학과 프로그래밍(2) 수업 조교. 실습 지도 및 질의응답 담당.',
    tags: ['TA', '강의보조', 'C언어'],
  },
  {
    id: 'lab',
    type: 'research',
    title: '분포학습연구실 학부연구생',
    subtitle: '인천대학교',
    date: '2025.08 ~',
    description: '이상치 탐지(IForest/LOF) 세미나 발표, 생협 식수 데이터 패턴 분석 수행.',
    tags: ['이상치 탐지', 'Python', '데이터 분석'],
  },
  {
    id: 'inu_pr',
    type: 'activity',
    title: '인천대학교 온라인홍보단 4기',
    subtitle: '인천대학교',
    date: '2025.3 ~ 2026.2',
    description: 'SNS 콘텐츠 기획·제작으로 인천대학교 온라인 채널 홍보 활동.',
    tags: ['홍보', 'SNS', '콘텐츠 기획'],
  },
  {
    id: 'likelion',
    type: 'activity',
    title: '멋쟁이사자처럼 13기',
    subtitle: '백엔드 파트',
    date: '2025.3 ~ 12',
    description: 'Spring Boot CRUD·REST API 설계 실습, 교내 해커톤 참가.',
    tags: ['Spring Boot', '해커톤'],
  },
];

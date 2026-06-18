export const CAT = {
  tech: { name: 'Skills', color: '#43c6e8' },
  project: { name: 'Projects', color: '#a98bff' },
  award: { name: 'Experience', color: '#ffd24a' },
  cert: { name: 'Certifications', color: '#5ad9a0' },
  team: { name: 'Leadership', color: '#ff6f61' },
  career: { name: 'Career', color: '#ffb14e' },
  hobby: { name: 'About', color: '#8be36a' },
} as const;

export type CatKey = keyof typeof CAT;

export const CAT_HUB: Record<CatKey, string> = {
  tech: 'c_tech',
  project: 'c_project',
  award: 'c_award',
  cert: 'c_cert',
  team: 'c_team',
  career: 'c_career',
  hobby: 'c_hobby',
};

export interface GraphNode {
  id: string;
  label: string;
  group: 'self' | 'cat' | 'sub';
  cat?: CatKey;
  r: number;
  kicker?: string;
  meta?: string;
  body?: string;
  stack?: string[];
  url?: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export const BASE_NODES: GraphNode[] = [
  { id: 'self', label: '김재웅', group: 'self', r: 26, kicker: 'DEVELOPER', meta: 'INU 정보통신공학과 · GPA 4.04/4.5 · ENTP', body: '백엔드를 중심으로 서비스를 기획하고 직접 운영합니다. 금융 시스템의 구조와 동시성 제어에 깊이 관심을 두고 있습니다.', stack: ['Spring Boot', 'Java', 'React', 'AWS', 'Docker'], url: 'https://github.com/grbuguj' },

  { id: 'c_tech', label: 'Skills', group: 'cat', cat: 'tech', r: 15 },
  { id: 'c_project', label: 'Projects', group: 'cat', cat: 'project', r: 15 },
  { id: 'c_award', label: 'Experience', group: 'cat', cat: 'award', r: 15 },
  { id: 'c_cert', label: 'Certifications', group: 'cat', cat: 'cert', r: 15 },
  { id: 'c_team', label: 'Leadership', group: 'cat', cat: 'team', r: 15 },
  { id: 'c_career', label: 'Career', group: 'cat', cat: 'career', r: 15 },
  { id: 'c_hobby', label: 'About', group: 'cat', cat: 'hobby', r: 15 },

  { id: 'spring', label: 'Spring Boot / Java', group: 'sub', cat: 'tech', r: 12, kicker: 'SKILL', meta: '메인 스택 · 중급', body: '백엔드 메인 스택. 대부분의 프로젝트를 Spring Boot/Java로 설계·구현.' },
  { id: 'db', label: 'MySQL / MariaDB', group: 'sub', cat: 'tech', r: 9, kicker: 'SKILL', meta: '중급', body: '관계형 DB 설계·운영. 트랜잭션, 스키마 설계 경험.' },
  { id: 'react', label: 'React', group: 'sub', cat: 'tech', r: 10, kicker: 'SKILL', meta: '프론트엔드 입문', body: '풀스택 전환의 출발점. 야구맵을 React로 직접 구현.' },
  { id: 'infra', label: 'AWS / Docker', group: 'sub', cat: 'tech', r: 9, kicker: 'SKILL', meta: 'EC2 · Nginx · Docker', body: 'AWS EC2 인스턴스 운영, Nginx, Docker 컨테이너 배포 경험.' },
  { id: 'redis', label: 'Redis', group: 'sub', cat: 'tech', r: 8, kicker: 'SKILL', meta: '캐싱', body: '야구맵 이미지 캐싱에 활용.' },
  { id: 'python', label: 'Python', group: 'sub', cat: 'tech', r: 8, kicker: 'SKILL', meta: '데이터 분석', body: '데이터 분석·연구실 작업에 활용.' },

  { id: 'afw', label: 'AI Finance World', group: 'sub', cat: 'project', r: 13, kicker: 'GRADUATION PROJECT', meta: '멀티에이전트 금융 시뮬레이션', body: 'Zero Intelligence Trader 기반 다중 에이전트가 송금·결제·투자 거래를 발생시키고, 백엔드의 동시성 제어(낙관/비관 락), Kafka, 원장 정합성, EOD 배치 검증을 정량 측정하는 시뮬레이션 시스템.', stack: ['Spring Boot', 'Kafka', 'Redis', 'JPA'] },
  { id: 'baseballmap', label: '야구맵', group: 'sub', cat: 'project', r: 11, kicker: 'PROJECT', meta: '야구 중계 술집 지도 · FE 담당', body: '야구 중계 틀어주는 술집을 지도로 찾는 서비스. 카카오맵 API, KBO 구단별 필터, GPS 위치검색, 리뷰/제보. 프론트엔드 담당.', stack: ['React', 'Kakao Map API', 'Redis'], url: 'https://xn--2e0bt1v52i.kr/' },
  { id: 'poly', label: 'poly-sniper', group: 'sub', cat: 'project', r: 9, kicker: 'PROJECT', meta: 'Polymarket 자동 베팅 엔진', body: '예측시장 Polymarket용 자동 베팅 엔진. EIP-712 서명, 멀티스테이지 필터 파이프라인(CUSUM·ATR·Kelly 등) 구현. 설계 주도.', stack: ['Spring Boot', 'web3j', 'EIP-712'], url: 'https://github.com/grbuguj/poly-sniper' },
  { id: 'keepbara', label: '키피바라', group: 'sub', cat: 'project', r: 9, kicker: 'PROJECT · HACKATHON', meta: '유니톤 2025 본선 · PM+백엔드', body: '유통기한 관리/식품 거래 앱. 쿠키 기반 인증을 JWT로 전환해 보안·확장성 개선, API 명세 작성.', stack: ['Spring Boot', 'JWT'], url: 'https://github.com/Unithon-INU/2025_UNITHON_TEAM_17_BE' },
  { id: 'cagong', label: 'GO!-카공', group: 'sub', cat: 'project', r: 8, kicker: 'PROJECT', meta: '카공 카페 지도 앱', body: '지도 기반으로 카공하기 좋은 카페를 찾는 앱.', stack: ['Spring Boot'], url: 'https://github.com/Go-Cagong' },
  { id: 'eum', label: '이음이', group: 'sub', cat: 'project', r: 8, kicker: 'PROJECT · COMPETITION', meta: '자전거 관광 추천 앱', body: '인천 공공데이터 기반 자전거 경로 추천 앱. 지도에 GPS 주행 경로 시각화.', stack: ['Flutter'], url: 'https://github.com/E-um-2/frontend' },

  { id: 'genai', label: 'GenAI 최우수상', group: 'sub', cat: 'award', r: 11, kicker: 'AWARD', meta: 'AWS · 30팀 중 2위 (최우수상)', body: 'GenAI 공공데이터 리빙랩 아이디어 경진대회 최우수상. PM 겸 백엔드로 매장 운영 의사결정 보조 시스템 구현.' },
  { id: 'lab', label: '분포학습연구실', group: 'sub', cat: 'award', r: 9, kicker: 'RESEARCH', meta: '학부연구생 · 2025.08~', body: '이상치 탐지(IForest/LOF) 세미나 발표, 생협 식수 데이터 패턴 분석 수행.' },
  { id: 'likelion', label: '멋쟁이사자처럼 13기', group: 'sub', cat: 'award', r: 8, kicker: 'ACTIVITY', meta: '백엔드 파트', body: 'Spring Boot CRUD·REST API 설계 실습, 교내 해커톤 참가.' },
  { id: 'ta', label: 'TA / 튜터링', group: 'sub', cat: 'award', r: 8, kicker: 'ACTIVITY', meta: '프로그래밍(2) TA · 우수튜터', body: '프로그래밍(2) TA, 교과튜터링 우수 그룹 튜터 선정.' },

  { id: 'gisa', label: '정보처리기사', group: 'sub', cat: 'cert', r: 9, kicker: 'CERTIFICATION', meta: '국가기술자격', body: '정보처리기사.' },
  { id: 'sqld', label: 'SQLD', group: 'sub', cat: 'cert', r: 8, kicker: 'CERTIFICATION', meta: 'SQL 개발자', body: 'SQL 개발자 (한국데이터산업진흥원).' },
  { id: 'adsp', label: 'ADsP', group: 'sub', cat: 'cert', r: 8, kicker: 'CERTIFICATION', meta: '데이터분석 준전문가', body: '데이터분석 준전문가.' },
  { id: 'dasp', label: 'DAsP', group: 'sub', cat: 'cert', r: 8, kicker: 'CERTIFICATION', meta: '데이터아키텍처 준전문가', body: '데이터아키텍처 준전문가.' },
  { id: 'gda', label: 'Google Data Analytics', group: 'sub', cat: 'cert', r: 8, kicker: 'CERTIFICATION', meta: 'Coursera Professional', body: 'Google Data Analytics Professional Certificate.' },

  { id: 'torch', label: '횃불이유괴단', group: 'sub', cat: 'team', r: 11, kicker: 'LEADERSHIP', meta: '창업동아리 팀장 · 7인 팀', body: '"트렌드를 서비스로 만든다, 릴스로 터트린다" 슬로건의 7인 창업동아리. 팀장으로 기획·백엔드·마케팅을 맡으며 여러 서비스를 운영.', url: 'https://torchers-web.vercel.app' },
  { id: 'reels', label: '콘텐츠/릴스', group: 'sub', cat: 'team', r: 8, kicker: 'LEADERSHIP', meta: '마케팅 감각', body: '패션 인스타 운영(팔로워 4.5만) 경험에서 온 콘텐츠 감각을 팀 릴스·마케팅에 접목.' },

  { id: 'goal', label: '지향점', group: 'sub', cat: 'career', r: 10, kicker: 'CAREER', meta: '백엔드 · 금융 도메인', body: '금융 시스템의 동시성·정합성을 깊이 다루는 백엔드 개발자. 설계부터 운영까지 직접 책임집니다.' },

  { id: 'axolotl', label: '우파루파', group: 'sub', cat: 'hobby', r: 9, kicker: 'ABOUT', meta: '반려동물', body: '우파루파를 키웁니다. GitHub 프로필 아바타도 우파루파.' },
  { id: 'fishing', label: '낚시', group: 'sub', cat: 'hobby', r: 8, kicker: 'ABOUT', meta: '취미', body: '낚시를 좋아합니다.' },
  { id: 'band', label: '밴드부 / LP', group: 'sub', cat: 'hobby', r: 9, kicker: 'ABOUT', meta: '밴드 동아리 · 음악 감상', body: '밴드부 활동(일렉·통기타·전자드럼). LP로 음악 감상하는 아날로그 취향.' },
  { id: 'sports', label: '풋살 / 보드 / 배드민턴', group: 'sub', cat: 'hobby', r: 8, kicker: 'ABOUT', meta: '운동', body: '풋살, 스케이트보드, 배드민턴 등 운동 전반.' },
  { id: 'maker', label: '만드는 사람', group: 'sub', cat: 'hobby', r: 8, kicker: 'ABOUT', meta: '메이커 기질', body: '초등학생 때 마인크래프트 서버를 직접 열었던 것이 개발의 시작. 만들고 싶은 게 생기면 직접 구현하는 게 습관.' },
];

export const BASE_EDGES: [string, string][] = [
  ['self', 'c_tech'], ['self', 'c_project'], ['self', 'c_award'], ['self', 'c_cert'],
  ['self', 'c_team'], ['self', 'c_career'], ['self', 'c_hobby'],
  ['c_tech', 'spring'], ['c_tech', 'db'], ['c_tech', 'react'], ['c_tech', 'infra'], ['c_tech', 'redis'], ['c_tech', 'python'],
  ['c_project', 'afw'], ['c_project', 'baseballmap'], ['c_project', 'poly'], ['c_project', 'keepbara'], ['c_project', 'cagong'], ['c_project', 'eum'],
  ['c_award', 'genai'], ['c_award', 'lab'], ['c_award', 'likelion'], ['c_award', 'ta'],
  ['c_cert', 'gisa'], ['c_cert', 'sqld'], ['c_cert', 'adsp'], ['c_cert', 'dasp'], ['c_cert', 'gda'],
  ['c_team', 'torch'], ['c_team', 'reels'],
  ['c_career', 'goal'],
  ['c_hobby', 'axolotl'], ['c_hobby', 'fishing'], ['c_hobby', 'band'], ['c_hobby', 'sports'], ['c_hobby', 'maker'],
  ['afw', 'spring'], ['afw', 'redis'], ['afw', 'db'], ['afw', 'lab'],
  ['baseballmap', 'react'], ['baseballmap', 'redis'], ['baseballmap', 'infra'], ['baseballmap', 'torch'],
  ['poly', 'spring'],
  ['keepbara', 'spring'], ['keepbara', 'db'],
  ['eum', 'python'],
  ['cagong', 'spring'],
  ['genai', 'lab'],
  ['gisa', 'spring'], ['sqld', 'db'], ['adsp', 'python'], ['gda', 'python'],
  ['reels', 'torch'],
  ['band', 'sports'],
];

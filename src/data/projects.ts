export type ProjectCategory = 'BE' | 'FE' | 'FS';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  role: string;
  takeaway: string;
  category: ProjectCategory;
  stack: string[];
  url?: string;
  github?: string;
  instagram?: string;
  highlight?: boolean;
  live?: boolean;
  wip?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'baseballmap',
    image: '/projects/baseballmap.png',
    title: '야구맵',
    subtitle: '야구 중계 술집 지도 서비스',
    date: '2026.06',
    description: '야구 중계를 틀어주는 술집을 지도로 찾는 서비스. 카카오맵 API, KBO 구단별 필터, 리뷰·제보 기능.',
    role: '팀장 겸 프론트엔드. 서비스 기획, 카카오맵 API 연동, KBO 구단별 필터·리뷰·제보 기능 구현, 인스타그램 채널 운영.',
    takeaway: '횃불이유괴단에서 직접 기획하고 만들어 운영 중인 서비스입니다. 프론트엔드를 담당하면서 장소 이미지를 요청마다 네이버 검색 API로 가져오던 방식을 Redis 캐싱으로 전환했고, 응답 속도를 약 2배 개선했습니다. 6월 18일 기준 인스타그램 팔로워 1,100명을 넘었고, 30일 기준 세션 619회·이벤트 2,746건이 발생했습니다. 사용자가 직접 가게를 제보해주는 걸 보면서, 서비스가 코드 밖에서도 살아간다는 걸 느끼고 있습니다.',
    category: 'FS',
    stack: ['React', 'Redis', 'Spring Boot'],
    url: 'https://xn--2e0bt1v52i.kr/',
    github: 'https://github.com/grbuguj/yagoomap-fronted',
    instagram: 'https://www.instagram.com/yagoo.map/',
    highlight: true,
    live: true,
  },
  {
    id: 'kimkw-law',
    title: '법무 상담 AI',
    subtitle: '실 의뢰 · 법무사 AI 상담 랜딩 페이지',
    date: '2026.06',
    description: '실제 운영 중인 법무사 사무소용 AI 상담 랜딩 페이지. 방문자 유입부터 상담 신청까지 흐름을 설계했습니다.',
    role: '기획·UX 설계 주도. 유입 흐름과 상담 전환 구조 설계, Claude와 페어프로그래밍으로 개발, Vercel 배포.',
    takeaway: '실제 의뢰받아 만든 프로젝트입니다. AI를 전면에 내세우기보다 방문자가 자연스럽게 상담으로 이어지는 흐름을 설계했고, 구현은 Claude와 페어프로그래밍으로 진행했습니다. 서버 프록시 구조나 스트리밍 처리 방식도 이때 처음 다뤄봤습니다.',
    category: 'FE',
    stack: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS'],
    url: 'https://kimkw-law.vercel.app/',
    github: 'https://github.com/grbuguj/kimkw-law',
    highlight: true,
    live: true,
  },
  {
    id: 'afw',
    image: '/projects/afw.png',
    title: 'AI Finance World',
    subtitle: '멀티에이전트 금융 시뮬레이션',
    date: '2026.03 ~',
    description: '멀티 에이전트들이 매수·매도 주문을 주고받는 금융 거래 시뮬레이션 백엔드. 졸업작품으로 개발 중.',
    role: 'PM 겸 백엔드 설계. 헥사고날 아키텍처 구성, Kafka 메시지 파이프라인·Redis 캐시 전략 설계, 멀티에이전트 트랜잭션 흐름 구현.',
    takeaway: '헥사고날 아키텍처를 처음 적용해본 프로젝트입니다. 도메인·애플리케이션·인프라 레이어를 분리하는 작업이 생각보다 까다로웠고, Kafka 파이프라인과 Redis 캐시 전략을 직접 설계하면서 구조가 왜 중요한지 실감했습니다. 낙관/비관 락의 성능 차이를 수치로 직접 비교해본 것도 이 프로젝트가 처음이었습니다.',
    category: 'FS',
    stack: ['Spring Boot', 'Java', 'Kafka', 'Redis', 'JPA', 'MySQL'],
    github: 'https://github.com/grbuguj',
    highlight: true,
    wip: true,
  },
  {
    id: 'poly',
    image: '/projects/poly.jpeg',
    title: 'poly-sniper',
    subtitle: 'Polymarket 자동 베팅 엔진',
    date: '2026.02',
    description: 'Polymarket 예측 시장에서 통계 지표를 분석해 실시간으로 베팅을 자동 실행하는 퀀트 트레이딩 봇.',
    role: '설계 주도. EIP-712 서명 구조 구현, CUSUM·ATR·Kelly 기반 멀티스테이지 판단 로직 설계. Claude와 페어프로그래밍으로 개발.',
    takeaway: 'Claude와 페어프로그래밍으로 진행했습니다. EIP-712 서명 구조를 처음 다뤄봤고, CUSUM·ATR·Kelly 기반 판단 로직을 수백 번 수정하면서 블록체인과 금융 수학이 코드에 어떻게 녹아드는지 배웠습니다. AI와 제대로 협업하는 방식도 이 프로젝트에서 익혔습니다.',
    category: 'BE',
    stack: ['Spring Boot', 'web3j', 'EIP-712', 'Java'],
    github: 'https://github.com/grbuguj/poly-sniper',
    highlight: true,
  },
  {
    id: 'cagong',
    image: '/projects/cagong.png',
    title: 'GO!-카공',
    subtitle: '카공 카페 지도 앱',
    date: '2025.12',
    description: '지도 기반으로 카공하기 좋은 카페를 찾는 앱. 위치 기반 검색과 카페 정보 제공.',
    role: '팀장 겸 백엔드. 스프린트 일정 관리, 위치 기반 검색 API·카페 정보 제공 구현.',
    takeaway: '역할을 명확히 분담하고 스프린트 방식으로 진행한 팀 프로젝트입니다. 모바일프로그래밍 수업 과제였지만 실제 서비스처럼 일정을 관리하며 완성했고, 교수님께 호평을 받으며 A+로 마무리됐습니다. 명확한 역할 분담이 팀 완성도에 얼마나 직결되는지 확인한 프로젝트입니다.',
    category: 'BE',
    stack: ['Spring Boot', 'Java', 'MySQL'],
    github: 'https://github.com/Go-Cagong',
  },
  {
    id: 'keepbara',
    image: '/projects/keepbara.png',
    title: '키피바라',
    subtitle: '유니톤 2025 본선 · 유통기한 관리 앱',
    date: '2025.06',
    description: '냉장고 식품의 유통기한을 관리하고 이웃과 거래·나눔까지 할 수 있는 앱. 유니톤 2025 본선 진출작.',
    role: '팀장 겸 PM·백엔드. 해커톤 팀 리드, JWT 인증 전환 결정 및 구현, API 명세 작성.',
    takeaway: 'CORS 이슈로 백엔드 연결이 제대로 되지 않아, 쿠키 기반 인증에서 JWT로 전환하는 결정을 내렸습니다. 해커톤 진행 중이라 시간이 촉박했지만 팀원들이 믿어줘서 마무리할 수 있었습니다. PM 역할을 맡으면서 기술 결정과 일정 관리를 동시에 챙기는 게 무엇인지 처음 경험했습니다.',
    category: 'BE',
    stack: ['Spring Boot', 'JWT', 'Java', 'MySQL'],
    github: 'https://github.com/Unithon-INU/2025_UNITHON_TEAM_17_BE',
  },
  {
    id: 'eum',
    image: '/projects/eum.png',
    title: '이음이',
    subtitle: '인천 공공데이터 기반 자전거 관광 앱',
    date: '2025.05',
    description: '인천공공데이터경진대회 출품작. 인천 공공데이터 기반 자전거 경로 추천·GPS 주행 시각화 앱.',
    role: '팀장 겸 백엔드. 팀 구성·일정 조율, 공공데이터 API 연동 및 정제, 경로 추천 로직 구현.',
    takeaway: '처음으로 팀장을 맡은 프로젝트입니다. 공공데이터 API 연동과 정제 작업이 예상보다 훨씬 오래 걸렸고, 팀원들과 호흡을 맞추는 것도 쉽지 않았습니다. 그 과정을 버텨내고 완성해 인천시 공모전 본선에 진출했습니다.',
    category: 'BE',
    stack: ['Flutter', 'Dart'],
    github: 'https://github.com/E-um-2/frontend',
  },
];

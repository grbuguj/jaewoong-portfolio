'use client';

import dynamic from 'next/dynamic';

const GraphView = dynamic(() => import('./GraphView'), { ssr: false });

export default function GraphViewWrapper() {
  return <GraphView />;
}

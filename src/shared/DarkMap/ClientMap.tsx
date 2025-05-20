'use client';

import dynamic from 'next/dynamic';

interface MapProps {
    width: number;
    height: number;
    radius?: number;
    center?: [number, number];
}

const DarkMap = dynamic(() => import('@/shared/DarkMap/DarkMap'), {
    ssr: false,
});

const ClientMapWrapper: React.FC<MapProps> = ({width, height, radius, center}) => {
    return<DarkMap width = { width } height = { height }  />;
}

export default ClientMapWrapper;
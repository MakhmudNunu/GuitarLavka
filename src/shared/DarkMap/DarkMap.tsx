'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  width: number;
  height: number;
  radius?: number;
  center?: [number, number];
}

const DarkMap: React.FC<MapProps> = ({ width, height, radius = 0, center }) => {
  useEffect(() => {
    const mapId = 'map';

    // Удаление старой карты
    const existingMap = L.DomUtil.get(mapId);
    if (existingMap && (existingMap as any)._leaflet_id !== undefined) {
      (existingMap as any)._leaflet_id = null;
    }

    const map = L.map(mapId, {
      center: [53.20315846184485, 50.15144325792789],
      zoom: 12,
    });

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://carto.com/">CARTO</a>, © OpenStreetMap contributors',
    }).addTo(map);

  
    const markerIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',  
      iconSize: [25, 41],  
      iconAnchor: [12, 41], 
      popupAnchor: [1, -34], 
      shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png', 
      shadowSize: [41, 41], 
    });


    const marker = L.marker([53.20315846184485, 50.15144325792789], { icon: markerIcon }).addTo(map);


    setTimeout(() => {
      map.invalidateSize();
    }, 300);

    const zoomInButton = document.querySelector('.leaflet-control-zoom-in') as HTMLElement;
    const zoomOutButton = document.querySelector('.leaflet-control-zoom-out') as HTMLElement;

    if (zoomInButton) {
      zoomInButton.style.backgroundColor = '#333';
      zoomInButton.style.width = '40px';
      zoomInButton.style.height = '40px';
      zoomInButton.style.color = '#fff';
      zoomInButton.style.display = 'flex';
      zoomInButton.style.justifyContent = 'center';
      zoomInButton.style.alignItems = 'center';
    }

    if (zoomOutButton) {
      zoomOutButton.style.backgroundColor = '#333';   
      zoomOutButton.style.width = '40px';
      zoomOutButton.style.height = '40px';
      zoomOutButton.style.color = '#fff';
      zoomOutButton.style.display = 'flex';
      zoomOutButton.style.justifyContent = 'center';
      zoomOutButton.style.alignItems = 'center';
    }

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: width === 100 ? `${width}%` : `${width}px`,
        height: height,
        borderRadius: radius,
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(255,255,255,0.1)',
      }}
    />
  );
}

export default DarkMap
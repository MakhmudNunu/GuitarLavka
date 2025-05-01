'use client'
import { useEffect, useState } from 'react';
import styles from './Geo.module.scss';

const Geo = () => {
  const [city, setCity] = useState<string | null>('Определяем...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          // Запрос на серверный маршрут
          const res = await fetch(`/api/geo?lat=${lat}&lng=${lon}`);
          const data = await res.json();

          // Получаем информацию о городе
          const address = data.address;
          const userCity =
            address?.city ||
            address?.town ||
            address?.village ||
            address?.state ||
            'Не удалось определить';
          
          let splitCity = userCity.split(' ')[0];
          setCity(splitCity);

        } catch (e) {
          console.error('Ошибка при запросе города:', e);
          setCity('Не удалось определить');
        }
      },
      (error) => {
        console.error('Ошибка получения геолокации:', error);
        setCity('Не удалось определить');
      }
    );
  }, []);

  return (
    <div className={styles.geo}>
      <span>Ваш город:</span><span>{city}</span>
    </div>
  );
};

export default Geo;

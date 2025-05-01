export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lng');

  if (!lat || !lon) {
    return new Response(JSON.stringify({ error: 'Широта и долгота обязательны' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Проверка на валидность координат
  if (isNaN(parseFloat(lat)) || isNaN(parseFloat(lon))) {
    return new Response(JSON.stringify({ error: 'Неверные значения широты или долготы' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

  try {
    const res = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'guitar-lavka-app (mahmud.nunu001@gmail.com)', // ОБЯЗАТЕЛЬНО! Укажи свой email
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Ошибка от Nominatim:', text);
      return new Response(JSON.stringify({ error: 'Ошибка от Nominatim', details: text }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    console.log('Nominatim response:', data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Серверная ошибка в /api/geo:', error);
    return new Response(JSON.stringify({ error: 'Серверная ошибка' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

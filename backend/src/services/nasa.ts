// TODO 1: Сервис для работы с внешним API
// 1. Напиши асинхронную функцию getDailyPicture()
// 2. Внутри сделай fetch к: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// 3. Распарси ответ (res.json()) и верни его.
// 4. Оберни в try/catch на случай ошибки сети.

const API_KEY = process.env.NASA_API_KEY as string;

export async function getDailyPicture() {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

		if (!response.ok) {
      throw new Error('Ошибка запроса к Nasa API');
		}

		const data = await response.json();
		return data;
	} catch(err) {
		throw err;
	}
}

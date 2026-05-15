import { Router } from 'express';
import { getDailyPicture } from '../services/nasa';

export const spaceRouter = Router();

// TODO 2: Создай GET-роут `/daily`
// 1. Сделай его асинхронным (async (req, res) => { ... })
// 2. Вызови внутри getDailyPicture()
// 3. Отправь полученные данные клиенту (res.json(...))
// 4. Если в сервисе произошла ошибка, перехвати её тут и верни статус 500


spaceRouter.get('/daily', async (req, res) => {
  try {
    const data = await getDailyPicture();
		res.json(data);
	} catch(err) {
		res.status(500).json({ message: 'Произошла ошибка' });
	}
});
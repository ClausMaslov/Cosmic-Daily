import express from 'express';
import cors from 'cors';
import { spaceRouter } from './routes/space';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/space', spaceRouter);

// TODO 3: Настрой сервер
// 1. Подключи cors() чтобы фронт мог делать запросы
// 2. Подключи express.json()
// 3. Подключи spaceRouter по префиксу `/api/space`
// 4. Запусти app.listen на PORT и выведи лог


app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
})
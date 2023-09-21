import express from 'express';
import cors from 'cors';
import userRouter from '../routes/user.js';
import errorMiddleware from '../middlewares/error-middleware.js';
import db from './database.js';
import chatRouter from '../routes/chat.js';
import messageRouter from '../routes/message.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

db.on('connected', () => {});

app.use(userRouter);
app.use(chatRouter);
app.use(messageRouter);
app.use(errorMiddleware);

export default app;

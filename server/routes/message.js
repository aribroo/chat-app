import express from 'express';
import { createMessage, getMessages } from '../controllers/message-controller.js';

const messageRouter = express.Router();

messageRouter.post('/api/message', createMessage);
messageRouter.get('/api/messages/:chatId', getMessages);

export default messageRouter;

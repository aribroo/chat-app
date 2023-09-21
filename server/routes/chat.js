import express from 'express';
import { createChat, findChat, findUserChats } from '../controllers/chat-controller.js';

const chatRouter = express.Router();

chatRouter.post('/api/chat', createChat);
chatRouter.get('/api/chats/:userId', findUserChats);
chatRouter.get('/api/chat/find/:firstId/:secondId', findChat);

export default chatRouter;

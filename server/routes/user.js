import express from 'express';
import { login, register, getUsers, getUser } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.post('/api/user/register', register);
userRouter.post('/api/user/login', login);
userRouter.get('/api/users', getUsers);
userRouter.get('/api/user/:id', getUser);

export default userRouter;

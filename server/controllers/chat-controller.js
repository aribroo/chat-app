import chatService from '../services/chat-service.js';

export const createChat = async (req, res, next) => {
  try {
    const { firstId, secondId } = req.body;
    const response = await chatService.createChat(firstId, secondId);

    res.status(200).json({ data: response });
  } catch (e) {
    next(e);
  }
};

export const findUserChats = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const response = await chatService.findUserChats(userId);

    res.status(200).json({ data: response });
  } catch (e) {
    next(e);
  }
};

export const findChat = async (req, res, next) => {
  try {
    const firstId = req.params.firstId;
    const secondId = req.params.secondId;

    const response = await chatService.createChat(firstId, secondId);

    res.status(200).json({ data: response });
  } catch (e) {
    next(e);
  }
};

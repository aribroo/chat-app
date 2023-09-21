import messageService from '../services/message-service.js';

export const createMessage = async (req, res, next) => {
  try {
    const response = await messageService.createMessage(req.body);

    res.status(200).json({ data: response });
  } catch (e) {
    next(e);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const chatId = req.params.chatId;
    const response = await messageService.getMessages(chatId);

    res.status(200).json({ data: response });
  } catch (e) {
    next(e);
  }
};

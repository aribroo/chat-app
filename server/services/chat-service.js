import { ResponseError } from '../error/response-error.js';
import chatModel from '../models/chat-model.js';
import { idValidation } from '../validation/chat-schema.js';
import { validate } from '../validation/validation.js';

const createChat = async (firstId, secondId) => {
  firstId = validate(idValidation, firstId);
  secondId = validate(idValidation, secondId);

  const chat = await chatModel.findOne({ members: { $all: [firstId, secondId] } });

  if (!chat) {
    const newChat = new chatModel({ members: [firstId, secondId] });
    return newChat.save();
  }

  return chat;
};

const findUserChats = async (userId) => {
  userId = validate(idValidation, userId);
  const chats = await chatModel.find({ members: { $in: [userId] } });

  if (chats.length === 0) throw new ResponseError(404, 'Chat is not found');

  return chats;
};

const findChat = async (firstId, secondId) => {
  const chat = await chatModel.findOne({ members: { $all: [firstId, secondId] } });
  return chat;
};

export default { createChat, findUserChats, findChat };

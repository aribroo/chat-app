import messageModel from '../models/message-model.js';
import { createMessageValidation } from '../validation/message-schema.js';
import { validate } from '../validation/validation.js';

const createMessage = async (request) => {
  request = validate(createMessageValidation, request);

  const message = new messageModel({
    chatId: request.chatId,
    senderId: request.senderId,
    text: request.text
  });

  return message.save();
};

const getMessages = async (chatId) => {
  const messages = await messageModel.find({ chatId });

  return messages;
};

export default { createMessage, getMessages };

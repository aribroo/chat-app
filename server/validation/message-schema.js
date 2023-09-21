import Joi from 'joi';

export const createMessageValidation = Joi.object({
  chatId: Joi.string().required(),
  senderId: Joi.string().required(),
  text: Joi.string().required()
});

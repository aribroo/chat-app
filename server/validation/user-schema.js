import Joi from 'joi';

export const registerValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required().min(3).max(100),
  password: Joi.string().min(6).required()
});

export const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const getUserValidation = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();

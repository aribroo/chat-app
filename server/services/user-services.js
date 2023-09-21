import { getUserValidation, loginValidation, registerValidation } from '../validation/user-schema.js';
import { ResponseError } from '../error/response-error.js';
import { validate } from '../validation/validation.js';
import userModel from '../models/user-model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createToken = (data) => {
  const secretKey = process.env.SECRET_KEY;
  return jwt.sign(data, secretKey, { expiresIn: '1h' });
};

const register = async (request) => {
  request = validate(registerValidation, request);

  const user = await userModel.findOne({ email: request.email });

  if (user) throw new ResponseError(400, 'Email already registered!');

  request.password = await bcrypt.hash(request.password, 10);

  const newUser = new userModel(request);

  await newUser.save();

  return {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email
  };
};

const login = async (request) => {
  request = validate(loginValidation, request);

  const user = await userModel.findOne({ email: request.email });

  if (!user) throw new ResponseError(400, 'Email or password wrong!');

  const isPasswordValid = await bcrypt.compare(request.password, user.password);

  if (!isPasswordValid) throw new ResponseError(400, 'Email or password wrong!');

  const token = createToken({ id: user._id, name: user.name });

  return { token };
};

const getUsers = async () => {
  const users = await userModel.find().select('_id name email');

  if (users.length === 0) throw new ResponseError(404, 'Users is not found');

  return users;
};

const getUser = async (id) => {
  // id = validate(getUserValidation, id);

  const user = await userModel
    .findOne({ _id: id })
    .select('_id name email')
    .catch((e) => console.log(e));

  if (!user) throw new ResponseError(404, 'Users is not found');

  return user;
};

export default { register, login, getUsers, getUser };

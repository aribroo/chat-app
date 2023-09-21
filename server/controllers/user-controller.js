import userServices from '../services/user-services.js';

export const register = async (req, res, next) => {
  try {
    const result = await userServices.register(req.body);

    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req.body);

    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const result = await userServices.getUsers();

    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const result = await userServices.getUser(req.params.id);

    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

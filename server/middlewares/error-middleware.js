import { ResponseError } from '../error/response-error.js';

const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    next();
    return;
  }

  if (error instanceof ResponseError) {
    res.status(error.status).json({ errors: error.message });
  } else {
    res.status(500).json({ errors: error.message });
  }
};

export default errorMiddleware;

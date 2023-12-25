import Logger from "bunyan";
import { ErrorRequestHandler } from "express";

export const requestErrorHandler =
  (log: Logger): ErrorRequestHandler =>
  (error, _req, res, _next) => {
    res.status(error.status || 500);
    log.info(res);
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  };

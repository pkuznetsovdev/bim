import {AppConfig} from "../config";
import {ServerOptions} from "http";
import express, { ErrorRequestHandler, Express } from 'express';
import Logger from "bunyan";
import routes from './routes';
import {APP_PATHS, NODE_ENV_KEYS} from "@app/constants";

const app = express();

const errorHandler = (log: Logger): ErrorRequestHandler => (error, req, res, next) => {
    res.status(error.status || 500)
    log.error(error);
    return res.json({
        error: {
            message: error.message,
        }
    });
};

const getApp = (config: AppConfig): Express => {
    const log = config.log;

    if (app.get('env') === NODE_ENV_KEYS.development) {
        app.use((req, res, next) => {
           log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    app.use(APP_PATHS.home, routes());

    app.use(errorHandler(log));

    return app;
};

export {
    getApp,
}
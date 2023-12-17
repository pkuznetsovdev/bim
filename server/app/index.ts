import {AppConfig} from "../config";
import express, { ErrorRequestHandler, Express } from 'express';
import Logger from "bunyan";
import routes from './routes';
import {APP_PATHS, NODE_ENV_KEYS} from "@app/constants";
import {requestErrorHandler} from "@app/utils";

const app = express();

import { UserService } from "@app/services";

const getApp = (config: AppConfig): Express => {
    const log = config.log;

    const userService = new UserService();

    if (app.get('env') === NODE_ENV_KEYS.development) {
        app.use((req, _res, next) => {
           log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    app.use(APP_PATHS.root, routes({ userService }));

    app.use(requestErrorHandler(log));

    return app;
};

export {
    getApp,
}
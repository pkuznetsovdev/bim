import cookieParser from "cookie-parser";
import cors from 'cors';
import {AppConfig} from "@config";
import express, { Express } from 'express';
import routes from './router';
import {APP_PATHS, NODE_ENV_KEYS} from "@app/constants";
import {requestErrorHandler} from "@app/utils";

const app = express();

const getApp = (config: AppConfig): Express => {
    const log = config.log;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    // @ts-ignore-next-line - allow assigning readonly property to mutable
    app.use(cors({ origin: config.allowedDomains }));

    if (app.get('env') === NODE_ENV_KEYS.development) {
        app.use((req, _res, next) => {
           log.debug(`${req.method}: ${req.url}`);
            return next();
        });
    }

    app.use(APP_PATHS.root, routes(config));

    app.use(requestErrorHandler(log));

    return app;
};

export {
    getApp,
}
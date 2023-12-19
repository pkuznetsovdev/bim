import {AppConfig} from "../config";
import express, { ErrorRequestHandler, Express } from 'express';
import routes from './routes';
import {APP_PATHS, NODE_ENV_KEYS} from "@app/constants";
import {requestErrorHandler} from "@app/utils";
import {initDevHelpers} from "@dev";

const app = express();

const getApp = (config: AppConfig): Express => {
    const log = config.log;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

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
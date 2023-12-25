import express from 'express';
import {APP_PATHS} from "@app/constants";
import {getUserRouter, UserService} from '@app/models';
import {AppConfig} from "@config";

const router = express.Router();

export default (config: AppConfig) => {

    router.get(APP_PATHS.root, (_req, res) => {
        res.send(`Route: ${APP_PATHS.root}`)
    })

    const userService = new UserService(config.postgres.client);

    router.use(APP_PATHS.user, getUserRouter(config, userService));

    return router;
}
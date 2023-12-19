import express from 'express';
import {APP_PATHS} from "@app/constants";
import users from './user';
import {Services} from "@app/services";
import {AppConfig} from "../../config";

const router = express.Router();
const usersRoute = users;

export default (config: AppConfig) => {
    router.get(APP_PATHS.root, (_req, res) => {
        res.send(`Route: ${APP_PATHS.root}`)
    })

    router.use(APP_PATHS.user, usersRoute(config));

    return router;
}
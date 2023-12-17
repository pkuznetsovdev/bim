import express from 'express';
import {APP_PATHS} from "@app/constants";
import users from './users';
import {Services} from "@app/services";

const router = express.Router();
const usersRoute = users;

export default (services: Services) => {
    router.get(APP_PATHS.root, (_req, res) => {
        res.send(`Route: ${APP_PATHS.root}`)
    })

    router.use(APP_PATHS.users, usersRoute(services.userService));

    return router;
}
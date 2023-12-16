import express from 'express';
import {APP_PATHS} from "@app/constants";
import users from './users';

const router = express.Router();
const usersRoute = users;

export default () => {
    router.get(APP_PATHS.home, (req, res) => {
        res.send(`Route: ${APP_PATHS.home}`)
    })

    router.use(APP_PATHS.users, usersRoute());


    return router;
}
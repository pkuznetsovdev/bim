import express from 'express';
import {APP_PATHS} from "@app/constants";

const router = express.Router();

export default () => {
    router.get(APP_PATHS.users, (req, res) => {
        res.send(`Route: ${APP_PATHS.users}`)
    })

    return router;
}
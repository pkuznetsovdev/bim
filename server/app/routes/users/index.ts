import express from 'express';
import {APP_PATHS} from "@app/constants";
import {IUserService} from "@app/services";

const router = express.Router();

export default (userService: IUserService) => {

    router.get(APP_PATHS.root, async (req, res, next) => {
        try {
            const userData = await userService.getUser();
            res.send(`Route: ${userData}`)
        } catch (e) {
            return next(e);
        }
    })

    return router;
}
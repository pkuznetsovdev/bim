import express from 'express';
import {AppConfig} from "@config";
import {APP_PATHS} from "@app/constants";
import {DBService} from "@app/models/sequelize";
import {getCurrentUserId} from "./utils";
import {User} from "./types";

const router = express.Router();
export const getUserRouter = (config: AppConfig, userService: DBService<User>) => {

    router.post(APP_PATHS.root, async (req, res, next) => {
        try {
            const newUserParams = req.body;

            const user = await userService.create(newUserParams);
            res.send(user)
        } catch (e) {
            return next(e);
        }
    })

    router.patch(APP_PATHS.root, async (req, res, next) => {
        try {
            const currentUserId = getCurrentUserId({req});
            const newUserParams = req.body;

            await userService.update(currentUserId, newUserParams);
            res.end();
        } catch (e) {
            return next(e);
        }
    })

    // router.get(APP_PATHS.root, async (_req, res, next) => {
    //     try {
    //         const user = await userService.getUser();
    //         res.send(`Route: ${user}`)
    //     } catch (e) {
    //         return next(e);
    //     }
    // })
    //

    //
    // router.delete(APP_PATHS.root, async (req, res, next) => {
    //     try {
    //         await userService.removeUser();
    //         res.end();
    //     } catch (e) {
    //         return next(e);
    //     }
    // })
    //
    // router.get(APP_PATHS.search, async (req, res, next) => {
    //     try {
    //         const users = await userService.searchUsers(req.body);
    //         res.send(users)
    //     } catch (e) {
    //         return next(e);
    //     }
    // })
    //
    // router.get(APP_PATHS.all, async (_req, res, next) => {
    //     try {
    //         const users = await userService.getAllUsers();
    //         res.send(users)
    //     } catch (e) {
    //         return next(e);
    //     }
    //
    // })

    return router;
}
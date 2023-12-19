import express from 'express';
import {APP_PATHS} from "@app/constants";
import {IUserService, UserService} from "@app/services";
import {AppConfig} from "../../../config";

const router = express.Router();

export default (config: AppConfig) => {
    const userService = new UserService(config.postgres.client);

    router.get(APP_PATHS.root, async (_req, res, next) => {
        try {
            const user = await userService.getUser();
            res.send(`Route: ${user}`)
        } catch (e) {
            return next(e);
        }
    })

    router.post(APP_PATHS.root, async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body);
            res.send(user)
        } catch (e) {
            return next(e);
        }
    })

    router.patch(APP_PATHS.root, async (req, res, next) => {
        try {
            await userService.updateUser(req.body);
            res.end();
        } catch (e) {
            return next(e);
        }
    })

    router.delete(APP_PATHS.root, async (req, res, next) => {
        try {
            await userService.removeUser();
            res.end();
        } catch (e) {
            return next(e);
        }
    })

    router.get(APP_PATHS.search, async (req, res, next) => {
        try {
            const users = await userService.searchUsers(req.body);
            res.send(users)
        } catch (e) {
            return next(e);
        }
    })

    router.get(APP_PATHS.all, async (_req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            res.send(users)
        } catch (e) {
            return next(e);
        }

    })

    return router;
}
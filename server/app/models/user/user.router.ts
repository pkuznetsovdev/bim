import express from "express";
import { AppConfig } from "@config";
import { AppPaths } from "@app/constants";
import { DBService } from "@app/models/sequelize";
import { createError, removeEmptyKeys } from "@app/utils";
import { getCurrentUserId } from "./utils";
import { User } from "./types";

const router = express.Router();
export const getUserRouter = (
  config: AppConfig,
  userService: DBService<User>,
) => {
  router.post(AppPaths.root, async (req, res, next) => {
    try {
      const newUserParams = req.body;

      const user = await userService.create(newUserParams);
      res.send(user);
    } catch (e) {
      return next(e);
    }
  });

  router.patch(AppPaths.root, async (req, res, next) => {
    try {
      const currentUserId = getCurrentUserId({ req });
      const newUserParams = req.body;

      const filteredNewParams = removeEmptyKeys(newUserParams);

      if (Object.keys(filteredNewParams).length) {
        await userService.update(parseInt(`${currentUserId}`), newUserParams);
        res.end();
      } else {
        createError("No params to use for update");
      }
    } catch (e) {
      return next(e);
    }
  });

  router.get(AppPaths.all, async (_req, res, next) => {
    try {
      const users = await userService.getAll();
      res.send(users);
    } catch (e) {
      return next(e);
    }
  });

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

  return router;
};

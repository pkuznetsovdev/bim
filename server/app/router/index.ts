import express from "express";
import { AppPaths } from "@app/constants";
import { getUserRouter, UserService } from "@app/models";
import { AppConfig } from "@config";

const router = express.Router();

export default (config: AppConfig) => {
  router.get(AppPaths.root, (_req, res) => {
    res.send(`Route: ${AppPaths.root}`);
  });

  const userService = new UserService(config.postgres.client);

  router.use(AppPaths.user, getUserRouter(config, userService));

  return router;
};

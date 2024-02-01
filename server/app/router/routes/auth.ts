import express from "express";
import { AppConfig } from "@config";
import { AppPaths } from "@app/constants";
import "@config/passport";
import passport from "passport";
import { ClientPaths } from "@app/constants/client-paths";
import { User } from "@app/models";

const router = express.Router();

export const getAuthRouter = (config: AppConfig) => {
  router.get(
    AppPaths.google,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    }),
  );

  router.get(
    AppPaths.google + AppPaths.redirect,
    passport.authenticate("google", {
      failureRedirect: ClientPaths.root,
      successRedirect: ClientPaths.root,
    }),
    (_req, _res, _next) => {
      config.log.info("Google auth is passed and redirected!");
    },
  );

  router.post(AppPaths.login, (req, res, next) => {
    config.log.info(`Login handler ${JSON.stringify(req.body)}`);

    passport.authenticate("password", (err: Error, user: User) => {
      config.log.info(
        `passport authenticate cb with user: ${JSON.stringify(user)}`,
      );
    })(req, res, next);
  });

  router.post(AppPaths.logout, (req, res) => {
    req.logout(() => ({}));
    res.redirect(AppPaths.root);
  });

  return router;
};

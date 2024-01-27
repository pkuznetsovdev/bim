import express from "express";
import { AppConfig } from "@config";
import { AppPaths } from "@app/constants";
import passport from "passport";
import "@config/passport";
import { ClientPaths } from "@app/constants/client-paths";

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

  router.get(
    AppPaths.login,
    passport.authenticate("local", {
      failureRedirect: ClientPaths.root,
      successRedirect: ClientPaths.root,
    }),
  );

  router.get(AppPaths.logout, (req, res) => {
    req.logout(() => ({}));
    res.redirect(AppPaths.root);
  });

  return router;
};

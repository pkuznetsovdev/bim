import cors from "cors";
import { AppConfig } from "@config";
import express, { Express } from "express";
import { AppPaths, NODE_ENV_KEYS, SECRETS } from "@app/constants";
import { requestErrorHandler } from "@app/utils";
// import cookieSession from "cookie-session";
import expressSession from "express-session";
import passport from "passport";
import routes from "./router";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
app.use(
  expressSession({
    secret: SECRETS.SESSION_COOKIE_KEY,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

const getApp = (config: AppConfig): Express => {
  const { log } = config;

  app.use(cors({ origin: config.allowedDomains, credentials: true }));

  app.use((req, res, next) => {
    res.setHeader("refer", "utf-8");
    req.headers.referer = "";
    next();
  });

  if (app.get("env") === NODE_ENV_KEYS.development) {
    app.use((req, _res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use(AppPaths.api, routes(config));

  app.use(requestErrorHandler(log));

  return app;
};

export { getApp };

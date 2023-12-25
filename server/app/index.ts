import cookieParser from "cookie-parser";
import cors from "cors";
import { AppConfig } from "@config";
import express, { Express } from "express";
import { AppPaths, NODE_ENV_KEYS } from "@app/constants";
import { requestErrorHandler } from "@app/utils";
import routes from "./router";

const app = express();

const getApp = (config: AppConfig): Express => {
  const { log } = config;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  // @ts-expect-error - allow assigning readonly property to mutable
  app.use(cors({ origin: config.allowedDomains }));
  // app.use(cors(IS_PROD ? { origin: config.allowedDomains } : {}));

  if (app.get("env") === NODE_ENV_KEYS.development) {
    app.use((req, _res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use(AppPaths.root, routes(config));

  app.use(requestErrorHandler(log));

  return app;
};

export { getApp };

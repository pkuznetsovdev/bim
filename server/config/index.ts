import * as process from "process";
import Logger, { LogLevel } from "bunyan";
import { Sequelize, Options } from "sequelize";
import pjs from "../package.json";
import "dotenv/config";

const { name, version } = pjs;

const getLogger = (level: LogLevel) =>
  Logger.createLogger({
    name: `${name}:${version}`,
    level,
  });

const POSTGRES_OPTIONS = (log: Logger): Options => ({
  host: process.env.HOST,
  port: parseInt(process.env.LOCAL_DB_PORT),
  database: process.env.LOCAL_DB_NAME,
  dialect: "postgres",
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  logging: (msg: string) => log.info(msg),
});

const SHARED_CONFIG = {
  name,
  version,
  serviceTimeout: 30,
  log: getLogger("debug"),
  serverPort: process.env.LOCAL_SERVER_API_PORT,
  postgres: {
    options: POSTGRES_OPTIONS(getLogger("debug")),
    client: null as unknown as Sequelize,
  },
};

const config: Record<
  NodeEnvKeys,
  typeof SHARED_CONFIG & Record<string, unknown>
> = {
  development: SHARED_CONFIG,
  production: {
    ...SHARED_CONFIG,
    serverPort: process.env.SERVER_API_PORT,
    log: getLogger("info"),
    allowedDomains: [
      `${process.env.CLIENT_APP}:${process.env.CLIENT_PORT}`,
      `${process.env.SERVER_API}:${process.env.SERVER_API_PORT}`,
    ],
  },
  test: {
    ...SHARED_CONFIG,
    log: getLogger("fatal"),
  },
} as const;

export type AppConfig = (typeof config)[keyof typeof config];

export default config[process.env.NODE_ENV as keyof typeof config];

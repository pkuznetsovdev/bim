import * as http from "node:http";
import { Sequelize } from "sequelize";

import config from "config";
import { getApp } from "app";
import * as process from "process";

const { log } = config;
const sequelize = new Sequelize(config.postgres.options);

function connectToPostgres() {
  sequelize
    .authenticate()
    .then(() => {
      log.info("Authenticated to DB");
    })
    .catch((e) => {
      log.error("Unable to connect to DB", e);
      process.exit(1);
    });

  return sequelize;
}

config.postgres.client = connectToPostgres();

const app = getApp(config);

const server = http.createServer(app);

server.listen(config.serverPort);

server.on("listening", () => {
  const serverAddress = server.address();
  let port: string | null = null;

  if (typeof serverAddress === "string" || !serverAddress) {
    port = serverAddress;
  } else {
    port = `${serverAddress.port}`;
  }

  log.info(`Server is listening on port: ${port} in ${app.get("env")} mode`);
});

import * as http from 'node:http';
import config from '../config';
import { getApp } from '../app';
import * as process from "process";

const log = config.log;

const app =  getApp(config);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000)

server.on('listening', () => {
    const serverAddress = server.address();
    let port: string | null = null;

    if (typeof serverAddress === "string" || !serverAddress) {
        port = serverAddress;
    } else {
        port = serverAddress.port + '';
    }

    log.info(`Server is listening on port: ${port} in ${app.get('env')} mode`);
})

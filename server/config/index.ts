import * as process from "process";
import bunyan, {LogLevel} from 'bunyan';
import pjs from '../package.json';
import {NODE_ENV_KEYS} from "@app/constants";
import {Options} from "sequelize/types/sequelize";
import Logger from "bunyan";
import {Sequelize} from "sequelize";

const { name, version } = pjs;

const getLogger = (level: LogLevel) => bunyan.createLogger({
    name: `${name}:${version}`,
    level,
});

const POSTGRES_OPTIONS = (log: Logger): Options => ({
    host: 'localhost',
    port: 5432,
    database: 'bim-dev',
    dialect: 'postgres',
    username: 'postgres',
    password: 'admin',
    logging: (msg: string) => log.info(msg),
})

const SHARED_CONFIG = {
    name,
    version,
    serviceTimeout: 30,
    log: getLogger('debug'),
    postgres: {
        options: POSTGRES_OPTIONS(getLogger('debug')),
        client: null as unknown as Sequelize,
    },
} as const;

const config: Record<NodeEnvKeys, typeof SHARED_CONFIG> = {
    'development': SHARED_CONFIG,
    'production': {
        ...SHARED_CONFIG,
        log: getLogger('info'),
    },
    'test': {
        ...SHARED_CONFIG,
        log: getLogger('fatal'),
    },
} as const;

export type AppConfig = typeof config[keyof typeof config];

// @ts-ignore
export default config[process.env.NODE_ENV || NODE_ENV_KEYS.development]
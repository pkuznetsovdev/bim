import * as process from "process";
import bunyan, {LogLevel} from 'bunyan';
import pjs from '../package.json';
import {NODE_ENV_KEYS} from "@app/constants";

const { name, version } = pjs;

const getLogger = (level: LogLevel) => bunyan.createLogger({
    name: `${name}:${version}`,
    level,
});


const SHARED_CONFIG = {
    name,
    version,
    serviceTimeout: 30,
    log: getLogger('debug'),
} as const;

const test: MY_TEST = '';

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
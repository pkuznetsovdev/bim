import {User} from "@app/models";

declare global {

    declare type NodeEnvKeys = 'production' | 'development' | 'test';
    //
    // namespace env {
    //     declare const LOCAL_CLIENT_APP: string;
    //     declare const LOCAL_SERVER_API: string;
    //     declare const CLIENT_APP: string;
    //     declare const SERVER_API: string;
    // }

    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            HOST: string;
            LOCAL_CLIENT_PORT: string;
            LOCAL_SERVER_API_PORT: string;
            LOCAL_CLIENT_APP: string;
            LOCAL_SERVER_API: string;
            LOCAL_DB_PORT: string;
            LOCAL_DB_NAME: string;
            LOCAL_DB_USERNAME: string;
            LOCAL_DB_PASSWORD: string;
            CLIENT_PORT: string;
            SERVER_API_PORT: string;
            DB_NAME: string;
            DB_USERNAME: string;
            DB_PASSWORD: string;
            DB_PORT: string;
        }
    }

    namespace Express {
        export interface Request {
            user?: User;
        }
    }
}

export {}
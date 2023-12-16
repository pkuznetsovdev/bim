// export const NODE_ENV_KEYS: {
//     [key in NodeEnvKeys]: key;
// } = {
//     development: 'development', production: 'production', test: 'test'
// };

export const NODE_ENV_KEYS = {
    development: 'development' as const, production: 'production' as const, test: 'test' as const
};
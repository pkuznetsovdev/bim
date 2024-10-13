import { BASE_API_PATH } from '@constants';

export const getApiUrl = (apiPath: string) => `${BASE_API_PATH}${apiPath}`;

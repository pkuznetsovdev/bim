import { RequestConfigParams } from '@api';

export * from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig extends RequestConfigParams {}
}

import { AxiosRequestConfig } from 'axios';
import { RequestKey } from './types';
import { CANCELLED_REQUEST_STATUS } from './constants';

/** Helper function to generate a unique key for each request  */
export const getRequestKey = (config: AxiosRequestConfig): RequestKey => {
  const { method, url, params, data, abortStrategy } = config;

  if (abortStrategy === 'url') {
    return [method, url].join('&');
  }

  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
};

export const isCancelledRequestError = (errorStatus: number | undefined) =>
  errorStatus === CANCELLED_REQUEST_STATUS;

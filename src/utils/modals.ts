import { ModalId } from '@types';
import { MODAL_QUERY_PARAM_VALUE } from '@constants';
import { createSearchParams } from 'react-router-dom';

export const getQuery = (queryParams?: Record<string, unknown>) => {
  if (!queryParams) {
    return '';
  }

  // @ts-expect-error TODO: TS ERROR
  return `?${createSearchParams(queryParams)}`;
};

export const getLink = (
  path: string,
  queryParams?: Record<string, unknown>
) => {
  return `${path === '' ? window.location.pathname : path}${getQuery(queryParams)}`;
};

export const getModalLink = (
  modalId: ModalId,
  path = '',
  queryParams?: Record<string, unknown>
) => {
  return getLink(path, {
    [modalId]: MODAL_QUERY_PARAM_VALUE,
    ...(queryParams || {}),
  });
};

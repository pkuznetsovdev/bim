import { ModalId } from '@types';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { MODAL_QUERY_PARAM_VALUE } from '@constants';

export function useIsOpenModal(id?: ModalId, isOpen: boolean | null = null) {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    if (isOpen != null) {
      return isOpen;
    }

    if (!id) {
      return searchParams.toString().includes(`=${MODAL_QUERY_PARAM_VALUE}`);
    }

    return searchParams.get(id) === MODAL_QUERY_PARAM_VALUE;
  }, [isOpen, id, searchParams]);
}

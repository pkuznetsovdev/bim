/** TODO eslint: fix order 1. react* 2. classnames */
import classnames from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { MODAL_CONTAINER_SELECTOR, TRANSITION_STATES } from '@constants';
import { useIsOpenModal } from '@hooks';
import { ModalId, TransitionState } from '@types';
import { getClassNameByMods } from '@utils';

import './modal.scss';

const mainClass = 'modal';

type ModalProps = React.PropsWithChildren<{
  className?: string;
  transitionDuration?: number;
  isOpen?: boolean;
  id: ModalId;
  children: React.ReactElement<{ transitionState: TransitionState }>;
  mods?: ElementMods;
}>;

export const Modal = ({
  children,
  transitionDuration = 300,
  isOpen,
  id,
  className,
  mods,
}: ModalProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isOpenModal = useIsOpenModal(id, isOpen);

  const [transitionState, setTransitionState] =
    useState<null | TransitionState>(null);

  const timeout = useMemo(
    () => ({
      appear: 0,
      enter: 0,
      exit: transitionDuration,
    }),
    [transitionDuration],
  );

  const onCloseModal = useCallback(() => {
    searchParams.delete(id);
    setSearchParams(searchParams);
  }, [id, searchParams, setSearchParams]);

  const handleOnEntered = useCallback(
    () => setTransitionState(TRANSITION_STATES.entered),
    [],
  );
  const handleOnExiting = useCallback(
    () => setTransitionState(TRANSITION_STATES.exiting),
    [],
  );

  const modalContainer = useMemo(
    () => document.querySelector(MODAL_CONTAINER_SELECTOR),
    [],
  );

  const modalRef = useRef(null);

  return (
    <Transition
      nodeRef={modalRef}
      timeout={timeout}
      in={isOpenModal}
      appear
      mountOnEnter
      unmountOnExit
      onEntered={handleOnEntered}
      onExiting={handleOnExiting}
    >
      <div>
        {modalContainer &&
          createPortal(
            <div
              className={classnames(
                className,
                mainClass,
                getClassNameByMods(mainClass, mods, transitionState),
              )}
            >
              {children}
              <br />
              <button type="button" onClick={onCloseModal}>
                close
              </button>
            </div>,
            modalContainer,
          )}
      </div>
    </Transition>
  );
};

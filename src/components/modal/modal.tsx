import React, { useCallback, useMemo, useState } from 'react';
import { Transition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import './modal.scss';
import { createPortal } from 'react-dom';
import { TRANSITION_STATES } from '@constants';
import { ModalId, TransitionState } from '@types';
import { useIsOpenModal } from '@hooks';

const mainClass = 'modal';

type ModalProps = React.PropsWithChildren<{
  className?: string;
  transitionDuration?: number;
  isOpen?: boolean;
  id: ModalId;
  children: React.ReactElement<{ transitionState: TransitionState }>;
}>;

const MODAL_CONTAINER_SELECTOR = '#modal-root';

export const Modal = ({
  children,
  transitionDuration = 300,
  isOpen,
  id,
}: ModalProps) => {
  const isOpenModal = useIsOpenModal(id, isOpen);
  const navigate = useNavigate();

  const [transitionState, setTransitionState] =
    useState<null | TransitionState>(null);

  const timeout = useMemo(
    () => ({
      appear: 0,
      enter: 0,
      exit: transitionDuration,
    }),
    [transitionDuration]
  );

  const onCloseModal = useCallback(() => navigate(-1), [navigate]);

  const handleOnEntered = useCallback(
    () => setTransitionState(TRANSITION_STATES.entered),
    []
  );
  const handleOnExiting = useCallback(
    () => setTransitionState(TRANSITION_STATES.exiting),
    []
  );

  const modalContainer = useMemo(() => {
    return document.querySelector(MODAL_CONTAINER_SELECTOR);
  }, []);

  return (
    <Transition
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
            <div className={`${mainClass} ${mainClass}--${transitionState}`}>
              {children}
              <br />
              <button type="button" onClick={onCloseModal}>
                close
              </button>
            </div>,
            modalContainer
          )}
      </div>
    </Transition>
  );
};

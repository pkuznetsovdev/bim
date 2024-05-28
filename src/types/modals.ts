import { MODAL_IDS, TRANSITION_STATES } from '@constants';

export type ModalId = (typeof MODAL_IDS)[keyof typeof MODAL_IDS];
export type TransitionState =
  (typeof TRANSITION_STATES)[keyof typeof TRANSITION_STATES];

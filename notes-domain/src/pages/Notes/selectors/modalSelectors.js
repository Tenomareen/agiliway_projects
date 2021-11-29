import { createSelector } from 'reselect';

export const modalBaseState = (state) => state.modal;

export const typeSelector = createSelector(
  modalBaseState,
  (modal) => modal.type,
);

export const noteEditSelector = createSelector(
  modalBaseState,
  (modal) => modal.data,
);

export const idSelector = createSelector(
  modalBaseState,
  (modal) => modal.data.id,
);

export const modalLoadingSelector = createSelector(
  modalBaseState,
  (modal) => modal.loading,
);

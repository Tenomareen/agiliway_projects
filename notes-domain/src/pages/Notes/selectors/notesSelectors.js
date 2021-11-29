import { createSelector } from 'reselect';

export const notesBaseState = (state) => state.notes;

export const notesSelector = createSelector(
  notesBaseState,
  (notes) => notes.noteList,
);
export const loadingSelector = createSelector(
  notesBaseState,
  (notes) => notes.isLoading,
);

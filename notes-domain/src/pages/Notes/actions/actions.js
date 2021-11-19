import {
  CLOSE_ALL_NOTES,
  GET_ALL_NOTES,
  GET_ALL_NOTES_IN_PROGRESS,
  GET_NOTE_FOR_EDIT,
  MODAL_NOTE_CLOSE,
  MODAL_NOTE_IN_PROGRESS,
  MODAL_NOTE_SHOW,
  MODAL_NOTE_SUCCESS,
  NOTE_DETAIL_CLOSE,
  NOTE_DETAIL_IN_PROGRESS,
  NOTE_DETAIL_SHOW,
  NOTE_DETAIL_SUCCESS,
} from "../action-types/note.action-types";

export const getNoteForEditAction = (payload) => ({
  type: GET_NOTE_FOR_EDIT,
  payload,
});

export const modalNoteShowAction = (type, id) => ({
  type: MODAL_NOTE_SHOW,
  payload: { type, id },
});

export const modalNoteCloseAction = () => ({
  type: MODAL_NOTE_CLOSE,
});

export const modalNoteProgressAction = () => ({
  type: MODAL_NOTE_IN_PROGRESS,
});

export const modalNoteSuccessAction = () => ({
  type: MODAL_NOTE_SUCCESS,
});

export const editNoteSuccessAction = (payload) => ({
  type: GET_NOTE_FOR_EDIT,
  payload,
});

export const getNoteByIdShowAction = () => ({
  type: NOTE_DETAIL_SHOW,
});

export const getNoteByIdCloseAction = () => ({
  type: NOTE_DETAIL_CLOSE,
});

export const getNoteByIdProgressAction = () => ({
  type: NOTE_DETAIL_IN_PROGRESS,
});

export const getNoteByIdSuccessAction = (payload) => ({
  type: NOTE_DETAIL_SUCCESS,
  payload,
});

export const getNotesAction = (payload) => ({ type: GET_ALL_NOTES, payload });

export const getNotesInProgressAction = () => ({
  type: GET_ALL_NOTES_IN_PROGRESS,
});

export const closeNotes = () => ({ type: CLOSE_ALL_NOTES });

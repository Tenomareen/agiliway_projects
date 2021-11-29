import {
  CLOSE_ALL_NOTES,
  GET_ALL_NOTES,
  GET_ALL_NOTES_ERROR,
  GET_ALL_NOTES_IN_PROGRESS,
  GET_NOTE_FOR_EDIT,
  GET_NOTE_FOR_EDIT_SUCCESS,
  MODAL_NOTE_CLOSE,
  MODAL_NOTE_CREATE_START,
  MODAL_NOTE_DELETE_START,
  MODAL_NOTE_EDIT_START,
  MODAL_NOTE_IN_PROGRESS,
  MODAL_NOTE_SHOW,
  MODAL_NOTE_SUCCESS,
  NOTE_DETAIL_CLOSE,
  NOTE_DETAIL_IN_PROGRESS,
  NOTE_DETAIL_SHOW,
  NOTE_DETAIL_SUCCESS,
} from '../action-types/note.action-types';

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

export const getNotesStartAction = () => ({ type: GET_ALL_NOTES_IN_PROGRESS });

export const getNotesSuccessAction = () => ({ type: GET_ALL_NOTES });

export const getNotesErrorAction = () => ({ type: CLOSE_ALL_NOTES });

export const closeNote = () => ({ type: NOTE_DETAIL_CLOSE });

export const getNoteStartAction = (id) => ({ type: NOTE_DETAIL_IN_PROGRESS, payload: id });

export const getNoteSuccessAction = () => ({ type: NOTE_DETAIL_SUCCESS });

export const getNoteErrorAction = () => ({ type: NOTE_DETAIL_CLOSE });

export const deleteNoteStartAction = (id) => ({ type: MODAL_NOTE_IN_PROGRESS, payload: id });

export const createNoteStartAction = (payload) => ({ type: MODAL_NOTE_CREATE_START, payload });

export const editNoteStartAction = (data, id) => ({ type: MODAL_NOTE_EDIT_START, payload: { data, id } });

export const getNoteForEditNoteStartAction = (id) => ({ type: GET_NOTE_FOR_EDIT, payload: { id } });

export const getNoteForEditSuccessAction = (data) => ({ type: GET_NOTE_FOR_EDIT_SUCCESS, payload: data });

export const modalNoteDeleteStartAction = (id) => ({ type: MODAL_NOTE_DELETE_START, payload: id });

export const getNoteListErrorAction = () => ({ type: GET_ALL_NOTES_ERROR });

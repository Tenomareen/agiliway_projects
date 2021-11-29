import { message } from 'antd';
import {
  deleteNote,
  getNoteById,
  getNotes,
  postNote,
  putNote,
} from '../../../api/notes';
import {
  editNoteSuccessAction,
  getNotesInProgressAction,
  modalNoteProgressAction,
  modalNoteShowAction,
  modalNoteSuccessAction,
  getNotesAction,
  getNoteListErrorAction,
} from '../actions/actions';

export const getNoteList = () => (dispatch) => {
  dispatch(getNotesInProgressAction());
  return getNotes().then((response) => {
    dispatch(getNotesAction(response.data));
  })
    .catch(() => dispatch(getNoteListErrorAction()));
};

export const createNote = (note) => (dispatch) => {
  dispatch(modalNoteProgressAction());
  postNote(note).then(() => {
    dispatch(modalNoteSuccessAction());
    message.success('New Note was added');
    dispatch(getNoteList());
  });
};

export const deleteNoteById = (id) => (dispatch) => {
  dispatch(modalNoteProgressAction());
  deleteNote(id).then(() => {
    dispatch(modalNoteSuccessAction());
    message.success('Note was deleted');
    dispatch(getNoteList());
  });
};

export const editNote = (note, id) => (dispatch) => {
  dispatch(modalNoteProgressAction());
  putNote(note, id).then(() => {
    dispatch(modalNoteSuccessAction());
    message.success('Note was edited');
    dispatch(getNoteList());
  });
};

export const getNoteForEdit = (id) => (dispatch) => {
  dispatch(modalNoteShowAction('edit'));
  dispatch(modalNoteProgressAction());
  getNoteById(id).then((response) => {
    dispatch(editNoteSuccessAction(response));
  });
};

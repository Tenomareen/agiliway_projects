import { message } from "antd";
import {
  deleteNote,
  getNoteById,
  getNotes,
  postNote,
  putNote,
} from "../../../api/notes";
import {
  editNoteSuccessAction,
  getNotesInProgressAction,
  modalNoteProgressAction,
  modalNoteShowAction,
  modalNoteSuccessAction,
} from "../actions/actions";
import { getNotesAction } from "../actions/actions";

export const getNoteList = () => {
  return (dispatch) => {
    dispatch(getNotesInProgressAction());
    getNotes().then((response) => {
      dispatch(getNotesAction(response.data));
    });
  };
};

export const createNote = (note) => {
  return (dispatch) => {
    dispatch(modalNoteProgressAction());
    postNote(note).then(() => {      
      dispatch(modalNoteSuccessAction());
      message.success("New Note was added");
      dispatch(getNoteList());
    });
  };
};

export const deleteNoteById = (id) => {
  return (dispatch) => {
    dispatch(modalNoteProgressAction());
    deleteNote(id).then(() => {
      dispatch(modalNoteSuccessAction());
      message.success("Note was deleted");
      dispatch(getNoteList());
    });
  };
};

export const editNote = (note, id) => {
  return (dispatch) => {
    dispatch(modalNoteProgressAction());
    putNote(note, id).then(() => {
      dispatch(modalNoteSuccessAction());
      message.success("Note was edited");
      dispatch(getNoteList());
    });
  };
};

export const getNoteForEdit = (id) => {
  return (dispatch) => {
    dispatch(modalNoteShowAction("edit"));
    dispatch(modalNoteProgressAction());
    getNoteById(id).then((response) => { 
      dispatch(editNoteSuccessAction(response));
    });
  };
};

import { put, takeEvery, call } from 'redux-saga/effects';
import {
  deleteNote, getNoteById, getNotes, postNote, putNote,
} from '../../api/notes';
import {
  GET_ALL_NOTES_IN_PROGRESS, GET_NOTE_FOR_EDIT, MODAL_NOTE_CREATE_START, MODAL_NOTE_DELETE_START, MODAL_NOTE_EDIT_START, NOTE_DETAIL_IN_PROGRESS,
} from '../Notes/action-types/note.action-types';
import {
  closeNotes, getNoteForEditSuccessAction, getNotesAction, getNotesInProgressAction, modalNoteCloseAction, modalNoteProgressAction, modalNoteSuccessAction,
} from '../Notes/actions/actions';

export function* getNotesSaga() {
  try {
    const data = yield call(getNotes);
    yield put(getNotesAction(data));
  } catch (error) {
    yield put(closeNotes());
  }
}

function* getNoteSaga(action) {
  try {
    const data = yield call(getNoteById, action.payload);
    yield put({
      type: 'NOTE_DETAIL_SUCCESS', payload: data,
    });
  } catch (error) {
    yield put({
      type: 'NOTE_DETAIL_CLOSE',
    });
  }
}

function* deleteNoteSaga(action) {
  yield put(modalNoteProgressAction());
  try {
    yield call(deleteNote, action.payload);
    yield put(modalNoteSuccessAction());
    yield put(getNotesInProgressAction());
  } catch (error) {
    yield put(modalNoteCloseAction());
  }
}

function* createNoteSaga(action) {
  yield put(modalNoteProgressAction());
  try {
    yield call(postNote, action.payload);
    yield put(modalNoteSuccessAction());
    yield put(getNotesInProgressAction());
  } catch (error) {
    yield put(modalNoteCloseAction());
  }
}

function* editNoteSaga(action) {
  yield put(modalNoteProgressAction());
  try {
    yield call(putNote, action.payload.data, action.payload.id);
    yield put(modalNoteSuccessAction());
    yield put(getNotesInProgressAction());
  } catch (error) {
    yield put(modalNoteCloseAction());
  }
}

function* getNoteForEditNoteSaga(action) {
  console.log(action.payload.id);
  try {
    const data = yield call(getNoteById, action.payload.id);
    yield put(getNoteForEditSuccessAction(data));
  } catch (error) {
    console.log('hello');
  }
}

export function* watcherGetNotesSaga() {
  yield takeEvery(GET_ALL_NOTES_IN_PROGRESS, getNotesSaga);
}

export function* watcherGetNoteByIdSaga() {
  yield takeEvery(NOTE_DETAIL_IN_PROGRESS, getNoteSaga);
}

export function* watcherDeleteNoteByIdSaga() {
  yield takeEvery(MODAL_NOTE_DELETE_START, deleteNoteSaga);
}

export function* watcherCreateNoteByIdSaga() {
  yield takeEvery(MODAL_NOTE_CREATE_START, createNoteSaga);
}

export function* watcherEditNoteByIdSaga() {
  yield takeEvery(MODAL_NOTE_EDIT_START, editNoteSaga);
}

export function* watcherGetNoteForEditNoteByIdSaga() {
  yield takeEvery(GET_NOTE_FOR_EDIT, getNoteForEditNoteSaga);
}

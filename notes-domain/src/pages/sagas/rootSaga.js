import { all } from 'redux-saga/effects';
import {
  watcherGetNotesSaga, watcherGetNoteByIdSaga, watcherDeleteNoteByIdSaga, watcherCreateNoteByIdSaga, watcherEditNoteByIdSaga, watcherGetNoteForEditNoteByIdSaga,
} from './notesSagas';

export default function* rootSaga() {
  yield all([watcherGetNotesSaga(), watcherGetNoteByIdSaga(), watcherDeleteNoteByIdSaga(), watcherCreateNoteByIdSaga(), watcherEditNoteByIdSaga(), watcherGetNoteForEditNoteByIdSaga()]);
}

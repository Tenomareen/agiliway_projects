import {
  NOTE_DETAIL_CLOSE, NOTE_DETAIL_IN_PROGRESS, NOTE_DETAIL_SHOW, NOTE_DETAIL_SUCCESS,
} from '../action-types/note.action-types';

const initialState = {
  // visible: false,
  loadingDetail: false,
  note: {},
};

const noteDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_DETAIL_SHOW:
      return { ...state, loadingDetail: false };
    case NOTE_DETAIL_IN_PROGRESS:
      return { ...state, loadingDetail: true, note: { id: action.payload } };
    case NOTE_DETAIL_SUCCESS:
      return { ...state, loadingDetail: false, note: action.payload };
    case NOTE_DETAIL_CLOSE:
      return { ...state, loadingDetail: false };
    default:
      return state;
  }
};

export default noteDetailsReducer;

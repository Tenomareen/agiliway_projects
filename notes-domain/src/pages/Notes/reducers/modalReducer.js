import {
  GET_NOTE_FOR_EDIT, GET_NOTE_FOR_EDIT_SUCCESS, MODAL_NOTE_CLOSE, MODAL_NOTE_CREATE_START, MODAL_NOTE_DELETE_START, MODAL_NOTE_EDIT_IN_PROGRESS, MODAL_NOTE_EDIT_START, MODAL_NOTE_IN_PROGRESS, MODAL_NOTE_SHOW, MODAL_NOTE_SUCCESS,
} from '../action-types/note.action-types';

const initialState = {
  loading: false,
  data: {},
  type: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_NOTE_SHOW:
      return {
        ...state,
        loading: false,
        type: action.payload.type,
        data: { id: action.payload.id },
      };
    case MODAL_NOTE_CREATE_START:
      return { ...state, loading: true };
    case MODAL_NOTE_DELETE_START:
      return { ...state, loading: true };
    case MODAL_NOTE_EDIT_IN_PROGRESS:
      return { ...state, loading: true, data: action.payload };
    case MODAL_NOTE_EDIT_START:
      return { ...state, loading: true, data: { id: action.payload } };
    case MODAL_NOTE_IN_PROGRESS:
      return { ...state, loading: true };
    case MODAL_NOTE_SUCCESS:
      return initialState;
    case MODAL_NOTE_CLOSE:
      return initialState;
    case GET_NOTE_FOR_EDIT_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_NOTE_FOR_EDIT:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default modalReducer;

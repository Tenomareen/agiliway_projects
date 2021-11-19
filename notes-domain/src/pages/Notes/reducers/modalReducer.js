import { GET_NOTE_FOR_EDIT, MODAL_NOTE_CLOSE, MODAL_NOTE_IN_PROGRESS, MODAL_NOTE_SHOW, MODAL_NOTE_SUCCESS } from "../action-types/note.action-types";

const initialState = {
  loading: false,
  data: {},
  type: "",
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
    case MODAL_NOTE_IN_PROGRESS:
      return { ...state, loading: true };
    case MODAL_NOTE_SUCCESS:
      return initialState;
    case MODAL_NOTE_CLOSE:
      return initialState;
    case GET_NOTE_FOR_EDIT:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default modalReducer;

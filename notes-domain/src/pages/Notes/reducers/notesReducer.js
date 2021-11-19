import {
  CLOSE_ALL_NOTES,
  GET_ALL_NOTES,
  GET_ALL_NOTES_IN_PROGRESS,
} from "../action-types/note.action-types";

const initialState = {
  noteList: [],
  isLoading: true,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { isLoading: false, noteList: action.payload };
    case GET_ALL_NOTES_IN_PROGRESS:
      return { ...state, isLoading: true };
    case CLOSE_ALL_NOTES:
      return initialState;
    default:
      return state;
  }
};

export default notesReducer;

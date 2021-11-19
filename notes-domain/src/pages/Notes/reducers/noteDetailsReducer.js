import { NOTE_DETAIL_CLOSE, NOTE_DETAIL_IN_PROGRESS, NOTE_DETAIL_SHOW, NOTE_DETAIL_SUCCESS } from "../action-types/note.action-types";

const initialState = {
    // visible: false,
    loadingDetail: false,
    note: {},
  };
  
  const noteDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTE_DETAIL_SHOW:
        return { ...state, loadingModal: false, visible: true };
      case NOTE_DETAIL_IN_PROGRESS:
        return { ...state, loadingModal: true };
      case NOTE_DETAIL_SUCCESS:
        return { ...state, loadingModal: false, note: action.payload };
      case NOTE_DETAIL_CLOSE:
        return { ...state, loadingModal: false, visible: false };
      default:
        return state;
    }   
  };
  
  export default noteDetailsReducer;
  
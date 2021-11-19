import { getNoteById } from "../../../api/notes";
import {
  getNoteByIdProgressAction,
  getNoteByIdSuccessAction,
} from "../actions/actions";

export const getNoteDetails = (id) => {
  return (dispatch) => {
    dispatch(getNoteByIdProgressAction());
    getNoteById(id).then((response) => {
      dispatch(getNoteByIdSuccessAction(response));
    });
  };
};

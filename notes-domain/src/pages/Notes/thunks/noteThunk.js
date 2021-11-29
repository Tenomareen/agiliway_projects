import { getNoteById } from '../../../api/notes';
import {
  getNoteByIdProgressAction,
  getNoteByIdSuccessAction,
} from '../actions/actions';

export const getNoteDetails = (id) => (dispatch) => {
  dispatch(getNoteByIdProgressAction());
  getNoteById(id).then((response) => {
    dispatch(getNoteByIdSuccessAction(response));
  });
};

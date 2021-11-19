import {
  showModalAction,
  hideModalAction,
} from "./store/store";
import { connect } from "react-redux";
import MyModal from "./Modal";

function ModalRedux(props) {
  console.log(props);
  return (
    <>
      <button onClick={props.openModal}>Modal Redux</button>
      <MyModal onClose={props.closeModal} show={props.isOpen} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(showModalAction(true));
    },
    closeModal: () => {
      dispatch(hideModalAction(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);

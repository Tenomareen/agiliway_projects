import { Modal, Button } from "antd";
import React from "react";
import NoteForm from "../Form/NoteForm";
import PropTypes from "prop-types";

const ModalEdit = ({
  visible,
  loading,
  closeModal,
  noteEdit,
  handleSubmitEdit,
}) => {
  
  return (
    <>
      <Modal
        visible={visible}
        title="Edit"
        // onOk={handleOk}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            form="form"
            loading={loading}
            // onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <NoteForm handleSubmit={handleSubmitEdit} note={noteEdit} loading={loading} />
      </Modal>
    </>
  );
};

ModalEdit.propTypes ={
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  noteEdit: PropTypes.object,
  handleSubmitEdit: PropTypes.func,
}

export default ModalEdit;

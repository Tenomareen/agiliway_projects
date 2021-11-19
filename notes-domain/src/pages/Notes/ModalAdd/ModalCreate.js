import { Modal, Button } from "antd";
import React from "react";
import NoteForm from "../Form/NoteForm";
import PropTypes from "prop-types";

const ModalAdd = ({ visible, loading, closeModal, handleSubmitCreate }) => {
  return (
    <>
      <Modal
        visible={visible}
        title="Create"
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
        <NoteForm handleSubmit={handleSubmitCreate} loading={loading} />
      </Modal>
    </>
  );
};

ModalAdd.propTypes ={
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  handleSubmitCreate: PropTypes.func,
}

export default ModalAdd;

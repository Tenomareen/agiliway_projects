import { Modal, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const ModalDelete = ({
  visible, id, handleDelete, closeModal, loading,
}) => (
  <Modal
    visible={visible}
    title="Title"
        // onOk={handleOk}
    onCancel={closeModal}
    footer={[
      <Button key="back" onClick={closeModal}>
        Return
      </Button>,
      <Button
        key="delete"
        type="primary"
        form="form"
        loading={loading}
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>,
    ]}
  >
    Do your really want delete this?
  </Modal>
);

ModalDelete.propTypes = {
  visible: PropTypes.bool,
  id: PropTypes.string,
  closeModal: PropTypes.func,
  handleDelete: PropTypes.func,
  loading: PropTypes.bool,
};

ModalDelete.defaultProps = {
  visible: false,
  id: '',
  closeModal: () => {},
  handleDelete: () => {},
  loading: true,
};

export default ModalDelete;

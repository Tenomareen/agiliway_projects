import { Modal, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../Form/NoteForm';

const ModalAdd = ({
  visible, loading, closeModal, handleSubmitCreate,
}) => (
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
      >
        Submit
      </Button>,
    ]}
  >
    <NoteForm handleSubmit={handleSubmitCreate} loading={loading} />
  </Modal>
);

ModalAdd.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  handleSubmitCreate: PropTypes.func,
};

ModalAdd.defaultProps = {
  visible: false,
  closeModal: () => {},
  loading: true,
  handleSubmitCreate: () => {},
};

export default ModalAdd;

import { Modal, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../Form/NoteForm';

const ModalEdit = ({
  visible,
  loading,
  closeModal,
  noteEdit,
  handleSubmitEdit,
}) => (
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
      >
        Submit
      </Button>,
    ]}
  >
    <NoteForm handleSubmit={handleSubmitEdit} note={noteEdit} loading={loading} />
  </Modal>
);

ModalEdit.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  loading: PropTypes.bool,
  noteEdit: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  handleSubmitEdit: PropTypes.func,
};

ModalEdit.defaultProps = {
  visible: false,
  closeModal: () => {},
  loading: true,
  noteEdit: {},
  handleSubmitEdit: () => {},
};

export default ModalEdit;

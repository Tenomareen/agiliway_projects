import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

const NoteForm = ({ handleSubmit, note, loading }) => (
  <Spin spinning={loading}>
    <Form
      id="form"
      onSubmit={handleSubmit}
      initialValues={note}
      render={({
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} id="form">
          <label>Name</label>
          <Field
            name="name"
            component={InputField}
          />
          <label>Author</label>
          <Field
            name="author"
            component={InputField}
          />
          <label>Description</label>
          <Field
            name="description"
            component={TextAreaField}
          />
        </form>
      )}
    />
  </Spin>
);

NoteForm.propTypes = {
  note: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

NoteForm.defaultProps = {
  note: {},
  handleSubmit: () => {},
  loading: true,
};

export default NoteForm;

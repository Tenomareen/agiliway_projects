import React from "react";
import { Form, Field } from "react-final-form";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import PropTypes from "prop-types";
import { Spin } from "antd";

const NoteForm = ({ handleSubmit, note, loading }) => {
  return (
    <>
    <Spin spinning={ loading }>
      <Form
        id="form"
        onSubmit={handleSubmit}
        initialValues={note}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} id="form">
            <Field
              addonBefore={<label>Name</label>}
              name="name"
              component={InputField}
            />
            <Field
              addonBefore={<label>Author</label>}
              name="author"
              component={InputField}
            />
            <Field
              addonBefore={<label>Description</label>}
              name="description"
              component={TextAreaField}
            />
          </form>
        )}
      />
      </Spin>
    </>
  );
};

NoteForm.propTypes = {
  note: PropTypes.object,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
}

NoteForm.defaultProps = {
  note: {}
}

export default NoteForm;

import React from 'react';
import { Input } from 'antd';

export const TextAreaField = (props) => {
  const { TextArea } = Input;
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  return <TextArea rows={4} {...props.input} placeholder={props.placeholder} />;
};

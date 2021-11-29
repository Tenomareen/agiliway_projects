import React from 'react';
import { Input } from 'antd';

export const InputField = (props) =>
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  <Input {...props.input} placeholder={props.placeholder} />;

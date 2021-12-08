import React from "react";
import { Field } from "react-final-form";
import styles from "../../styles/Home.module.css";
import { Input, Radio, Select } from "antd";
import {
  dayValidator,
  monthValidator,
  required,
  yearValidator,
} from "./validators";

export const SecondStep = () => {
  const { Option } = Select;

  return (
    <div style={{ margin: "15px" }}>
      <div style={{ marginTop: "80px" }}>Date Field</div>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className={styles.date_form}
      >
        <Field name="day" validate={dayValidator}>
          {(props) => (
            <>
              <Input
                {...props.input}
                placeholder="DD"
                maxLength={2}
                className={styles.date_input}
              />
              {props.meta.error && props.meta.touched && (
                <span className={styles.error}>{props.meta.error}</span>
              )}
            </>
          )}
        </Field>
        <Field name="month" validate={monthValidator}>
          {(props) => (
            <>
              <Input
                {...props.input}
                placeholder="MM"
                maxLength={2}
                className={styles.date_input}
              />
              {props.meta.error && props.meta.touched && (
                <span className={styles.error}>{props.meta.error}</span>
              )}
            </>
          )}
        </Field>
        <Field name="year" validate={yearValidator}>
          {(props) => (
            <>
              <Input
                {...props.input}
                placeholder="YYYY"
                maxLength={4}
                className={styles.date_input}
              />
              {props.meta.error && props.meta.touched && (
                <span className={styles.error}>{props.meta.error}</span>
              )}
            </>
          )}
        </Field>
      </div>
      <div style={{ marginTop: "20px" }}>Gender Field</div>
      <Field name="gender" type="radio" multiple validate={required}>
        {(props) => (
          <Radio.Group
            onChange={props.input.onChange}
            id={props.input.name}
            buttonStyle="solid"
            size="large"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Radio.Button value="male">MALE</Radio.Button>
            <Radio.Button value="female">FEMALE</Radio.Button>
            <Radio.Button value="unspecified">UNSPECIFIED</Radio.Button>
          </Radio.Group>
        )}
      </Field>
      <div style={{ marginTop: "20px" }}>Secret Field</div>
      <Field name="secret" type="select" multiple validate={required}>
        {(props) => (
          <Select
            id={props.input.name}
            onChange={props.input.onChange}
            style={{
              width: "200px",
              marginBottom: "75px",
              marginLeft: "125px",
            }}
          >
            <Option value="twitter">Twitter</Option>
            <Option value="instagram">Instagram</Option>
            <Option value="Linkedin">Linkedin</Option>
          </Select>
        )}
      </Field>
    </div>
  );
};

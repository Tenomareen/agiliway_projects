import React from "react";
import { Field } from "react-final-form";
import { Input } from "antd";
import styles from "../../styles/Home.module.css";
import { confirmValidator, emailValidator, passwordValidator } from "./validators";

export const FirstStep = () => {
  return (
    <div>
      <div style={{ marginLeft: "75px", marginTop: "100px" }}>Email</div>
      <Field name="email" validate={emailValidator}>
        {(props) => (
          <>
            <Input
              {...props.input}
              style={{ width: "250px", marginLeft: "100px" }}
            />
            {props.meta.error && props.meta.touched && (
              <span className={styles.error}>{props.meta.error}</span>
            )}
          </>
        )}
      </Field>
      <div style={{ marginLeft: "75px", marginTop: "15px" }}>Password</div>
      <Field name="password" validate={passwordValidator}>
        {(props) => (
          <>
            <Input
              {...props.input}
              style={{ width: "250px", marginLeft: "100px" }}
              type="password"
            />
            {props.meta.error && props.meta.touched && (
              <span className={styles.error}>{props.meta.error}</span>
            )}
          </>
        )}
      </Field>
      <div style={{ marginLeft: "75px", marginTop: "15px" }}>
        Confirm Password
      </div>
      <Field name="confirmPassword" validate={confirmValidator}>
        {(props) => (
          <>
            <Input
              {...props.input}
              type="password"
              style={{
                width: "250px",
                marginLeft: "100px",
                marginBottom: "80px",
              }}
            />
            {props.meta.error && props.meta.touched && (
              <span className={styles.error}>{props.meta.error}</span>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

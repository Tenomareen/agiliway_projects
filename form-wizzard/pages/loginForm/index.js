import { useState } from "react";
import { Progress, Input, Radio, Select, Button } from "antd";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Form, Field } from "react-final-form";
import moment from "moment";

export default function Home() {
  const { Option } = Select;
  const [state, setState] = useState({
    type: 1,
    progress: 33.4,
  });
  let pass = "";

  const email = (value) =>
    value
      ? value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ? undefined
        : "Bad Email"
      : undefined;

  const required = (value) => (value ? undefined : "Required");

  const password = (value) => {
    pass = value;
    return value
      ? value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)
        ? undefined
        : "Bad Password"
      : undefined;
  };

  const confirm = (value) =>
    pass === value ? undefined : "Passwords didn`t match";

  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  const dataV = (value, allValues) => {
    // console.log(allValues);
    const day = allValues.day ? allValues.day : "";
    const month = allValues.month ? allValues.month : "";
    const year = allValues.year ? allValues.year : "";
    const date = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
    // console.log(date);
    return date.isValid() ? undefined : "Invalid Date";
  };

  const composeValidators =
    (...validators) =>
    (value, allValues) =>
      validators.reduce(
        (error, validator) => error || validator(value, allValues),
        undefined
      );

  const number = (value) =>
    value.match(/^[0-9]*$/) ? undefined : "Must be number";

  const handleSubmit = (values) => {
    console.log(
      `
             New Profile:
       Email: ${values.email},
       Password: ${values.password},
       Confirm Password: ${values.confirmPassword},
       Date: ${values.year}-${values.month}-${values.day},
       Gender: ${values.gender},
       Secret: ${values.secret}.
      `
    );
  };

  return (
    <div className={styles.form}>
      <div style={{ fontSize: "30px", color: "lightBlue" }}>
        {state.type !== 3 && "Signup"}
        {state.type === 3 && "Thank you!"}
      </div>
      <Progress
        percent={state.progress}
        showInfo={false}
        success={{ percent: 33.4, strokeColor: "dodgerblue" }}
        // style={{minHeight: "100px"}}
      />
      <Form
        id="form"
        onSubmit={handleSubmit}
        style={{ width: "500px" }}
        render={({ handleSubmit, errors, values }) => (
          <form id="form" onSubmit={handleSubmit}>
            {state.type === 1 && (
              <div>
                <div style={{ marginLeft: "75px", marginTop: "100px" }}>
                  Email
                </div>
                <Field
                  name="email"
                  validate={composeValidators(required, email)}
                >
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
                <div style={{ marginLeft: "75px", marginTop: "15px" }}>
                  Password
                </div>
                <Field
                  name="password"
                  validate={composeValidators(required, password)}
                >
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
                <Field
                  name="confirmPassword"
                  validate={composeValidators(required, confirm)}
                >
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
            )}
            {state.type === 2 && (
              <div style={{ margin: "15px" }}>
                <div style={{ marginTop: "80px" }}>Date Field</div>
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  className={styles.date_form}
                >
                  <Field
                    name="day"
                    validate={composeValidators(required, dataV, number)}
                  >
                    {(props) => (
                      <>
                        <Input
                          {...props.input}
                          placeholder="DD"
                          maxLength={2}
                          className={styles.date_input}
                        />
                        {props.meta.error && props.meta.touched && (
                          <span className={styles.error}>
                            {props.meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                  <Field
                    name="month"
                    validate={composeValidators(required, dataV, number)}
                  >
                    {(props) => (
                      <>
                        <Input
                          {...props.input}
                          placeholder="MM"
                          maxLength={2}
                          className={styles.date_input}
                        />
                        {props.meta.error && props.meta.touched && (
                          <span className={styles.error}>
                            {props.meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                  <Field
                    name="year"
                    validate={composeValidators(required, dataV, number)}
                  >
                    {(props) => (
                      <>
                        <Input
                          {...props.input}
                          placeholder="YYYY"
                          maxLength={4}
                          className={styles.date_input}
                        />
                        {props.meta.error && props.meta.touched && (
                          <span className={styles.error}>
                            {props.meta.error}
                          </span>
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
                      <Radio.Button value="unspecified">
                        UNSPECIFIED
                      </Radio.Button>
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
            )}
            {state.type == 3 && (
              <CheckCircleOutlined
                style={{
                  fontSize: "200px",
                  color: "green",
                  marginLeft: "150px",
                  marginTop: "75px",
                  marginBottom: "100px",
                }}
              />
            )}
            <hr style={{ width: "494px" }} />
            <div className={styles.buttons}>
              {state.type == 2 && (
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    values = { ...values, secret: "" };
                    setState({
                      ...state,
                      type: state.type > 1 ? state.type - 1 : 1,
                      progress: state.progress > 0 ? state.progress - 33.4 : 0,
                    });
                  }}
                >
                  Before
                </Button>
              )}
              {state.type !== 3 && (
                <Button
                  style={{ marginLeft: "auto", marginRight: "15px" }}
                  onClick={() => {
                    Object.keys(errors).length === 0 &&
                      setState({
                        ...state,
                        type: state.type + 1,
                        progress: state.progress + 33.4,
                      });
                  }}
                >
                  Next
                </Button>
              )}
              {state.type === 3 && (
                // <Link href="/">
                <Button
                  key="submit"
                  type="primary"
                  htmlType="submit"
                  form="form"
                  style={{ marginLeft: "175px" }}
                >
                  Go To Dashboard
                </Button>
                //  </Link>
              )}
            </div>
          </form>
        )}
      />
    </div>
  );
}

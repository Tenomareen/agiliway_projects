import { useState } from "react";
import { Progress, Button } from "antd";
import styles from "../../styles/Home.module.css";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Form, Field } from "react-final-form";
import { FirstStep } from "./firstStep";
import { SecondStep } from "./secondStep";

export default function Home() {
  const [state, setState] = useState({
    type: 1,
    progress: 33.4,
  });

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
            {state.type === 1 && <FirstStep />}
            {state.type === 2 && <SecondStep />}
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

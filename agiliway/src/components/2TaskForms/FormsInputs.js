import React from "react";
import "./styles.scss";
import { Field } from "./Field";

export class FormsComponent extends React.Component {
    state = {
        fields: {
            nameText: {
                type:"text",
                name: "nameText",
                label: "Name text",
                value: "",
                error: null,
                validator: (value="") => {
                    return(value.match(/^[a-zA-Z]+$/) ? false : !value.length ? "Required" : "Invalid Name")
                },
            },
            emailText: {
                type:"text",
                name: "emailText",
                label: "Email text",
                value: "",
                error: null,
                validator: (value="") => {
                    return value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/) ? false : "Invalid Email";
                },
            },
            passwordText: {
                type:"password",
                name: "passwordText",
                label: "Password text",
                value: "",
                error: null,
                validator: (value="") => {
                    return (value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
                    ? false : !value.length ? "Required" : "Invalid Password");
                },
            },
            confirmPasswordText: {
                type:"password",
                name: "confirmPasswordText",
                label: "Confirm Password text",
                value: "",
                error: null,
                validator: (value,password) => {
                    return (value === password ? false : "Passwords didn`t match");
                },
            },
        },
    };

    handleSubmit = (event) => { 
        event.preventDefault();
        const { nameText, emailText, passwordText, confirmPasswordText} = this.state.fields;
        const { fields } = this.state;
       this.setState({
           fields:{...this.state.fields,
               nameText: {...nameText,error: nameText.validator(nameText.value)},
               emailText: {...emailText,error: emailText.validator(emailText.value)},
               passwordText: {...passwordText,error:passwordText.validator(passwordText.value)},
               confirmPasswordText: {...confirmPasswordText,error: confirmPasswordText.validator(confirmPasswordText.value,passwordText.value)},  
           }    
           });
           const array = [];
           Object.entries(fields).forEach(([fieldName, fieldState]) => {
           array.push(fieldState.error);},)
           array.every(item => item === false ) && console.log(this.state);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        const currentField = this.state.fields[name];
        const { isError } = this.state;
        const { passwordText, confirmPasswordText } = this.state.fields;
        const error = value.length > 0 ? currentField.validator(value, passwordText.value) : false;
        if(name === "passwordText"){
        const error1 = this.state.fields.confirmPasswordText.validator(confirmPasswordText.value, value);
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value, error},
                confirmPasswordText: { ...this.state.fields.confirmPasswordText, error: error1},
            },
            isError: error && !isError ? true : false
        });
        }
        else this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value, error},
            },
            isError: error && !isError ? true : false
        });
    };

    handleReset = (event) => {
        event.preventDefault();
        const { fields } = this.state;
        const reset = Object.entries(fields).reduce((resetAccumulator,[fieldName, fieldState] ) => {
             return ({ ...resetAccumulator, [fieldName]: fieldState.value = "",  [fieldName]: fieldState.error = null});
        }, {})
        this.setState({
            ...this.state.fields,reset,
        })
    }

    render() {
        const { fields } = this.state;

        return (
            <>
                <div className="wrapper" >
                    <form className="inputs" onSubmit={this.handleSubmit}> 
                    {Object.entries(fields).map(([fieldName, fieldState]) => {
                        const {name, type, error, value, label} = fieldState;
                        return <Field
                        name={name}
                        label={label}
                        error={error}
                        value={value}
                        type={type}
                        onChange={this.handleChange}
                        />;
                    })}
                        <button className="buttons" onClick={this.handleReset}>Reset</button>
                        <button className="buttons">Submit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default FormsComponent;
import React from "react";
import { Input } from "antd";

export const InputField = (props) => {
    // console.log(props.values);
    return <Input {...props.input}  placeholder={props.placeholder} addonBefore={props.addonBefore}/>  
}
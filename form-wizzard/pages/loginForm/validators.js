import React from "react";
import moment from "moment";

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

export const required = (value) => (value ? undefined : "Required");

const password = (value) => {
  return value
    ? value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)
      ? undefined
      : "Bad Password"
    : undefined;
};

const confirm = (value, allValues) =>
  allValues.password === value ? undefined : "Passwords didn`t match";

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

export const emailValidator = composeValidators(required, email);
export const passwordValidator = composeValidators(required, password);
export const confirmValidator = composeValidators(required, confirm);
export const dayValidator = composeValidators(required, dataV, number);
export const monthValidator = composeValidators(required, dataV, number);
export const yearValidator = composeValidators(required, dataV, number);

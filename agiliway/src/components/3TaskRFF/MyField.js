import React from "react";

const MyField = ({
  type,
  title,
  name,
  placeholder,
  autoComplete,
  input,
  meta,
  label,
}) => {

  return (
    <>
    <div>
      <span className="inputs" type={title}>{label}  </span>
      <input
        name={ name }
        type={ type }
        className={ meta.valid ? "correct" : ""}
        placeholder={ placeholder }
        autoComplete={ autoComplete }
        {...input}
      />
      { meta.error && meta.touched && meta.error &&
      <span className="">{meta.error && meta.touched && meta.error}</span>
    }
      </div>
    </>
  );
};
export default MyField;

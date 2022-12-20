import React from "react";
import { OnelineTextField, InputLabelStyle } from "../Register/Styles.jsx";

const OnelineInputJobPost = (props) => {
  const { label, name, onChange, value, placeholder } = props;

  return (
    <>
      <InputLabelStyle
        style={{
          fontSize: "10px",
          fontWeight: "500",
          "& label.Mui-focused": {
            border: "2px solid #F48FB1",
          },
          "& .MuiInput-underline:after": {
            border: "2px solid #F48FB1",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "2px solid #F48FB1",
              backgroundColor: "#FFF",
            },
            "&:hover fieldset": {
              border: "2px solid #F48FB1",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #F48FB1",
            },
          },
        }}
      >
        {label}
      </InputLabelStyle>
      <OnelineTextField
        defaultValue=""
        color="primary"
        focused
        inputProps={{ style: { padding: 8 } }}
        name={name}
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: "360px ",
          marginBottom: "4px",
        }}
      />
    </>
  );
};

export default OnelineInputJobPost;

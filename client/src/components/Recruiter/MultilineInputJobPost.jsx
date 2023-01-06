import { useState, useEffect } from "react";
import { MultilineTextField, InputLabelStyle } from "../Register/Styles.jsx";

const MultilineInputJobPost = (props) => {
  const {
    errorMessage,
    label,
    name,
    onChange,
    value,
    placeholder,
    helperText,
    pattern,
  } = props;

  const [isValid, setIsValid] = useState(false);
  const validateInput = () => {
    const regex = new RegExp(pattern);
    const isInputValid = regex.test(value);
    setIsValid(isInputValid);
  };

  const message = () => {
    if (value === "") {
      return helperText;
    } else if (isValid === false) {
      return errorMessage;
    } else if (isValid === true) {
      return "";
    }
  };

  useEffect(() => {
    validateInput();
  }, [value]);
  return (
    <>
      <InputLabelStyle style={{ fontSize: "10px", fontWeight: "500" }}>
        {label}
      </InputLabelStyle>
      <MultilineTextField
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        defaultValue=""
        style={{ marginBottom: "14px", width: "760px " }}
        color="primary"
        placeholder={placeholder}
        focused
        inputProps={{ style: { padding: "8px" } }}
        multiline
        rows={3}
        helperText={"" || message()}
        FormHelperTextProps={{
          style: { color: isValid ? "#8E8E8E" : "#F48FB1" },
        }}
      />
    </>
  );
};

export default MultilineInputJobPost;

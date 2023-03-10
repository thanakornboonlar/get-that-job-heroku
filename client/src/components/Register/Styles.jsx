import {
  styled,
  Button,
  TextField,
  InputLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// -------------- Button --------------

export const NextButton = styled(Button)(() => ({
  fontFamily: "var( --inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "16px",
  padding: "8px 16px",
  marginTop: "16px",
  width: "115px",
}));

export const Buttonwidth = styled(Button)(() => ({
  fontFamily: "var( --inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "16px",
  padding: "8px 16px",
  marginTop: "16px",
  width: "150px",
}));

export const UploadButton = styled(NextButton)(() => ({
  borderRadius: "8px",
  width: "180px",
  marginTop: "0px",
  marginRight: "5px",
}));

export const SkipButton = styled(NextButton)(() => ({
  color: "#616161",
  border: "1px solid #F48FB1",
}));

// -------------- TextField --------------

export const OnelineTextField = styled(TextField)(() => ({
  width: "350px",
  Height: "36px",
  marginBottom: "16px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderRadius: "8px",
    },
  },
}));

export const MultilineTextField = styled(TextField)(() => ({
  width: "600px",

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderRadius: "8px",
    },
  },

  "& .css-ivu46s-MuiInputBase-root-MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .css-1h8391f-MuiFormHelperText-root": {
    marginLeft: "0px",
    fontSize: "14px",
  },
  "& .css-1h8391f-MuiFormHelperText-root ": {
    color: "#8E8E8E",
  },
}));

// -------------- label --------------

export const InputLabelStyle = styled(InputLabel)(() => ({
  fontFamily: "var( --inter-font)",
  fontSize: "12px",
  color: "#373737",
  fontWeight: "400",
  marginBottom: "3px",
}));

// -------------- Multiple form stepper --------------

export const StepperStyle = styled(Stepper)(() => ({
  width: "80%",
  "& .css-z7uhs0-MuiStepConnector-line ": {
    display: "none",
  },
  marginTop: "20px",
  "& .css-1m8sh6p-MuiSvgIcon-root-MuiStepIcon-root": {
    width: "32px",
    height: "32px",
    color: "#E1E2E2",
  },
  "& .css-1rstrof-MuiStepIcon-text": {
    fontFamily: "var(--montserrat-font)",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label.Mui-active": {
    color: "#373737",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label.Mui-completed": {
    color: "#616161",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label": {
    color: "#8E8E8E",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-vnkopk-MuiStepLabel-iconContainer": {
    marginBottom: "28px",
  },
  "& .css-1m8sh6p-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
    color: "#F48FB1",
  },
  "& .css-1m8sh6p-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
    color: "#616161",
  },
  "& .css-7jsr5h-MuiFormControl-root-MuiTextField-root": {
    backgroundColor: "#FFFFFF",
  },
}));

export const RecruiterStepper = styled(StepperStyle)(() => ({
  width: "50%",
  "& .css-j5w0w9-MuiStepConnector-root ": {
    display: "none",
  },
  "& .css-1vyamtt-MuiStepLabel-labelContainer ": {
    width: "70%",
  },
}));

// -------------- Typography --------------

export const RecommendedTypography = styled(Typography)(() => ({
  lineHeight: "0",
  marginBottom: "4px",
}));

export const ValidateTypography = styled(Typography)(() => ({
  width: "600px",
  "& .css-ivu46s-MuiInputBase-root-MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .css-1h8391f-MuiFormHelperText-root": {
    marginLeft: "0px",
    fontSize: "14px",
  },
  "& .css-1h8391f-MuiFormHelperText-root ": {
    color: "#8E8E8E",
  },
}));

// -------------- Pinkdate --------------

export const Datepic = styled(DatePicker)(() => ({
  marginBottom: "16px",

  "& label.Mui-focused": {
    border: "2px solid #F48FB1",
  },
  "& .MuiInput-underline:after": {
    border: "2px solid #F48FB1",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      border: "2px solid #F48FB1",
    },
    "&:hover fieldset": {
      border: "2px solid #F48FB1",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #F48FB1",
    },
  },
}));
// ----buttono to hide password
export const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === "dark" ? "#CDD2D7" : "#3E5060"};
  `
);
export const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

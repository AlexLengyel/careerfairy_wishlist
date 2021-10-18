import {
  styled,
  TextField,
  inputLabelClasses,
  outlinedInputClasses,
} from "@mui/material";
import globalStyles from "../../styles/globalStyles";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    border: globalStyles.border.mainBlack,
    borderRadius: "12px",
    fontWeight: "bold",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: globalStyles.color.turquoise,
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: globalStyles.color.turquoise,
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: "black",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "black",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "black",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "black",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "black",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "black",
  },
});

export default StyledTextField;

import { makeStyles } from "@material-ui/core";
import globalStyles from "../../styles/globalStyles";

const useStyles = makeStyles({
  gradientBackground: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(42,186,165,0.5494572829131652) 75%, rgba(42,186,165,0.7959558823529411) 100%)",
  },
  filterBox: {
    width: "90%",
    paddingBottom: "10px",

    borderBottom: globalStyles.border.mainBlack,

    display: "flex",
    alignItems: "center",
  },
});

export default useStyles;

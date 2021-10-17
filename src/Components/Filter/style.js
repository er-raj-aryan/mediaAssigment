import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
    padding: "10px 30px",
    justifyContent: "center",
    position: "absolute",
    zIndex: 99,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "white !important",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  a: {
    textDecoration: "none",
    fontWeight: "700",
  },
  linkItem: {
    padding: "0px 10px",
    "&:hover": {
      borderBottom: "2px solid white",
    },
  },
  whatsapp: {
    textDecoration: "none",
    border: "2px solid white",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  },
  text: {
    color: "white !important",
  },
}));

export default useStyle;

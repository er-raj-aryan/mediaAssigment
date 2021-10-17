import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  backgroundImg: {
    width: "100%",
    position: "absolute",
  },
  item: {
    width: "100%",
    flexDirection:"column !important",
    display:'flex',
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop:"15%",
    marginBottom:'5%',
    
  },
  img: {
    height: "100vh",
    width: "100%",
  },
  text1: {
    color: "white !important",
    position: "absolute",
  },
  text2: {
    color: "#c1afaf8c !important",
    marginTop:'60px !important',
  },
  card:{
    position: 'relative',
    display:'flex',
    flexDirection:'row',
    padding:'10px',
    margin:"50px 50px"
  },
  filterContainer:{
      display:'flex',
      justifyContent:'space-between',
  }
}));

export default useStyle;

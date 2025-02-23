import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import {useNavigate} from 'react-router-dom';
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const {currency, setCurrency, user} = CryptoState();

  const history = useNavigate();

  const darktheme = createTheme({
    palette: {
        primary:{
            main: "#fff",
        },
        type: "dark",
    },
  })
  return (
    <ThemeProvider theme={darktheme}>
        <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography 
          variant="h6"
          onClick={()=> history("/")}
          className={classes.title}>Crypto Hunter</Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e)=> setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
          {user? <UserSidebar/> :<AuthModal />}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    
  );
};

export default Header;

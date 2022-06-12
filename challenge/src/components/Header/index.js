import React from "react";
import { useSelector } from "react-redux";
import Link from '@mui/material/Link';
import { cartQuantitySelector } from "../../store/cart";

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

export default function Header() {
  const cartLength = useSelector(cartQuantitySelector);
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none',} }}/>
      <CssBaseline />        
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,position: 'fixed',}}>
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <nav>
              <Link href="/">
                <Button variant="contained">
                  <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />       
                      
                  <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 0 }}>
                    X-Brain
                  </Typography>
                </Button>        
              </Link>
            </nav>
                        
            <Button variant="contained" sx={{ my: 1, mx: 1.5, marginLeft: 121}}  href="cart" size="small">        
                <i
                  className="fa fa-shopping-cart text-light fa-3x"
                  aria-hidden="true"
                  style={{ position: "relative" }}>
                  <span
                    style={{
                      color: "#333",
                      position: "absolute",
                      fontSize: 18,
                      fontWeight: "bold",
                      top: 10,
                      left: 25,
                      fontFamily: "Arial",
                    }}>
                    {cartLength}
                  </span>
                </i>               
            </Button>         
          </Toolbar> 
        </AppBar>
    </React.Fragment>
  );
}

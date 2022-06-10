import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartQuantitySelector } from "../../store/cart";

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  const cartLength = useSelector(cartQuantitySelector);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
          <Link className="navbar-brand" to="/">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            Xbrain
            </Typography>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Box sx={{ flexGrow: 0 }}>            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <Link to="cart">
                <i
                  className="fa fa-shopping-cart text-light fa-3x"
                  aria-hidden="true"
                  style={{ position: "relative" }}
                >
                  <span
                    style={{
                      color: "#333",
                      position: "absolute",
                      fontSize: 18,
                      fontWeight: "bold",
                      top: 10,
                      left: 25,
                      fontFamily: "Arial",
                    }}
                  >
                    {cartLength}
                  </span>
                </i>
              </Link>
            </div>
          </Box>
      </Toolbar> 
      </Container>
    </AppBar>
  );
}

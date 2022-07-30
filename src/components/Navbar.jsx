import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../static/media/Logo.png";
import logo2 from "./../static/media/log_v2.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { blue, indigo } from '@mui/material/colors';
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky" sx={{ background: "#fff", boxShadow: "none", borderBottom: "1.5px solid rgb(230, 230, 230)", filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))", }} >
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }} >
            <a className="header_link logolink" href={"/"}>
              <img className="main-logo" src={logo2} alt="Logo" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, position: 'relative' }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" sx={{ color: "#000", }} >
              <MenuIcon />
            </IconButton>
            <Menu disableScrollLock={true} id="menu-appbar" className="manu_container" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left", }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left", }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" }, }} >
              <MenuItem onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
                <a className="header_link" id="link" href="#scanner" style={{ textDecoration: "none", paddingInline: "16px", paddingBlock: "6px", width: "100%", }} >
                  <Typography sx={{ textTransform: "none", }} >
                    Scanner
                  </Typography>
                </a>
              </MenuItem>
              <Divider style={{ width: "70%", marginInline: "auto" }} />
              <MenuItem onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
                <a className="header_link" id="link" href="#goals" style={{ textDecoration: "none", paddingInline: "16px", paddingBlock: "6px", width: "100%", }}>
                  <Typography sx={{ textTransform: "none", }}  >
                    Future Goals
                  </Typography>
                </a>
              </MenuItem>
              <Divider style={{ width: "70%", marginInline: "auto" }} />
              <MenuItem onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
                <a className="header_link" id="link" href="#contact" style={{ textDecoration: "none", paddingInline: "16px", paddingBlock: "6px", width: "100%", }} >
                  <Typography sx={{ textTransform: "none", }} >
                    Contact Us
                  </Typography>
                </a>
              </MenuItem>
              <Divider style={{ width: "70%", marginInline: "auto" }} />
              <MenuItem onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
                <a className="header_link" id="link" href="#contact" style={{ textDecoration: "none", paddingInline: "16px", paddingBlock: "6px", width: "100%", }} >
                  <Typography sx={{ textTransform: "none", }} >
                    Deep Fakes
                  </Typography>
                </a>
              </MenuItem>
              <Divider style={{ width: "70%", marginInline: "auto" }} />
              <MenuItem onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
                <a className="header_link" id="link" href="#contact" style={{ textDecoration: "none", paddingInline: "16px", paddingBlock: "6px", width: "100%", }} >
                  <Typography sx={{ textTransform: "none", }} >
                    Models
                  </Typography>
                </a>
              </MenuItem>

            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} >
            <a className="header_link" href={"/"}>
              <img className="main-logo" src={logo} alt="Logo" />
            </a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", }} >
            <div style={{ display: "flex", flexDirection: "row", }} className="header_wraper"  >
              <a className="header_link" id="link" href="#deep-fake" style={{ color: "gray", textDecoration: "none", marginInline: "16px", marginBlock: "6px", }} >
                <Typography fontSize={16} fontWeight={"Bold"} sx={{ textTransform: "none", }}  >
                  Deep Fakes
                </Typography>
              </a>
              <a className="header_link" id="link" href="#models" style={{ color: "#163E7B", textDecoration: "none", marginInline: "16px", marginBlock: "6px", }} >
                <Typography fontSize={16} fontWeight={"Bold"} sx={{ textTransform: "none", }}  >
                  Models
                </Typography>
              </a>
              <a className="header_link" id="link" href="#scanner" style={{ color: "gray", textDecoration: "none", marginInline: "16px", marginBlock: "6px", }}  >
                <Typography fontSize={16} fontWeight={"Bold"} sx={{ textTransform: "none", }}    >
                  Scanner
                </Typography>
              </a>
              <a className="header_link" id="link" href="#goals" style={{ color: "#163E7B", textDecoration: "none", marginInline: "16px", marginBlock: "6px", }} >
                <Typography fontSize={16} fontWeight={"Bold"} sx={{ textTransform: "none", }}   >
                  Future Goals
                </Typography>
              </a>
              <a className="header_link" id="link" href="#contact" style={{ color: "gray", textDecoration: "none", marginInline: "16px", marginBlock: "6px", }} >
                <Typography fontSize={16} fontWeight={"Bold"} sx={{ textTransform: "none", }}  >
                  Contact Us
                </Typography>
              </a>


            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

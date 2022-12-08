import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /*ホームボタン　プロフィールアイコン */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*ホームボタン　aタグにリンク*/}
          <Grid container sx={{ flexGrow: 1 }}>
            <a href="home.html">
              <IconButton>
                <HomeIcon sx={{ fontSize: 40 }} color="black" />
              </IconButton>
            </a>
          </Grid>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Grid container sx={{ flexGrow: 1 }}>
              <AccountCircle sx={{ fontSize: 40 }} color="black" />
            </Grid>
          </IconButton>

          {/*profileiconのクリック後のメニュー位置*/}
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a href="Myaccount.html" target={"_blank"}>
                Profile
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="login.html" target={"_blank"}>
                Logout
              </a>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

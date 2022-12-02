import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography variant="h10" component="div">
            利用規約
          </Typography>

          <Typography
            variant="h10"
            component="div"
            textAlign={"center"}
            sx={{ flexGrow: 1 }}
          >
            ©2022-team22
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

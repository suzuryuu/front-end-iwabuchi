import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


export default function free() {
  return (
    <Box>
      {/*タイトルの位置*/}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={50}>
          <Grid item xs={12} align="center">
            <Typography variant="h2">gameskillcoting</Typography>
          </Grid>
          <Grid item xs={12} align="center">
          <Typography variant="h2">互いにゲームスキルをUP!</Typography>
          </Grid>
          <Grid item xs={12} align="center">
          <Typography variant="h2">利用手順</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

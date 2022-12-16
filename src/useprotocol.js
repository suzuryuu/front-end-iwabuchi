import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

export default function free() {
  return (
    <Box>
      {/*カードサイズ sx={{ maxWidth: 300 }} */}
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          {/*カードのヘッダー*/}
          <CardHeader
            title="新規登録"
            align="center"
            style={{ backgroundColor: "gray", color: "blck" }}
          />
          <Typography gutterBottom variant="h5" component="div" align="center">
            <a href="logon.html">登録はこちらから</a>
          </Typography>

          <Typography color="text.secondary"align="center" style={{color: "red"}}>
            ＊メールアドレスが必要になります。
          </Typography>
        </CardContent>

        <Grid spacing={2}>
          <CardContent>
            <CardHeader
              title="ログイン"
              align="center"
              style={{ backgroundColor: "gray" }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <a href="login.html">登録済みの方はこちらから</a>
            </Typography>
            <Typography color="text.secondary"align="center" style={{color: "red"}}>
            ＊メールアドレス、パスワードが必要になります。
            </Typography>
          </CardContent>
        </Grid>

        <CardContent>
          <CardHeader
            title="退会"
            align="center"
            style={{ backgroundColor: "gray" }}
          />
          <Typography gutterBottom variant="h5" component="div" align="center">
          <a href="login.html">退会はこちらから</a>
          </Typography>
          <Typography color="text.secondary"align="center" style={{color: "red"}}>
            ＊退会するとアカウントが消えます。
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

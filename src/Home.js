import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

//newsカード
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import valo from "./valo.jpg";
import apex from "./apex.jpg";
import spla from "./spla.jpg";

import "./Home.css"

/*タグの一覧*/

const tag = [
  { label: "Apex Legends" },
  { label: "VALORANT" },
  { label: "Splatoon" },
  { label: "Other" },
];

const tag2 = [
  { label: "Shoot" },
  { label: "Capacity" },
  { label: "Judge" },
  { label: "Other" },
];

export default function Home() {
  return (
    <box>
      {/*アイコン配置 リンク*/}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={tag}
            sx={{ width: 200, pt: 10, flex: 1, flexGrow: 1 }}
            renderInput={(params) => <TextField {...params} label="GameName" />}
          />
        </Grid>

        {/*paramsの値で*/}
        <Grid item xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={tag2}
            sx={{ width: 200, pt: 10, flex: 1, flexGrow: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Gameplay Skill" />
            )}
          />
        </Grid>

        <Grid item xs={5} sm={5} pt={5}>
          <a href="Inform.js" target={"_blank"}>
            <IconButton>
              <NotificationsIcon sx={{ fontSize: 100, flexGrow: 1 }} />
            </IconButton>
          </a>
        </Grid>

        <Grid item xs={5} sm={4} pt={3}>
          <a href="Dm.html" target={"_blank"}>
            <IconButton>
              <ForumIcon sx={{ fontSize: 100, flexGrow: 1 }} />
            </IconButton>
          </a>
        </Grid>
      </Grid>

      <text class="text">News</text>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <text class="game">VALORANT</text>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={valo} title="news valo" />
          <CardContent>
            <Typography variant="h6" color="black">
              valo champion group of team performance
            </Typography>
          </CardContent>
        </Card>
        <text class="game">Apex Legends</text>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={apex} title="news apex" />
          <CardContent>
            <Typography variant="h6" color="black" >
              apex champion group of team performance
            </Typography>
          </CardContent>
        </Card>
        <text class="game">Splatoon</text>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={spla} title="news spla" />
          <CardContent>
            <Typography variant="h6" color="black">
              spla champion group of team performance
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </box>
  );
}

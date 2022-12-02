import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import img from "./user.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ReactStars from "react-rating-stars-component";

export default function Matchinguser() {
  /*プロフィール画像処理*/
  const [imagecrop, setimagecrop] = useState("");
  const [image, setimage] = useState("");
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);
  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  /*受け取り画像処理*/
  const saveCropImage = () => {
    setprofile([...profile, { pview }]);
    setimagecrop(false);
  };

  /*星マークの受付*/
  const ratingChanged = (newRating) => {};

  return (
    <Box>
      <Button 
        variant="outlined" 
        color="primary"
        style={{
          width: "60px",
          height: "50px",
              }}
          label="戻る"
      />

      <InputText
        type="file"
        accept="/image/*"
        style={{ display: "none" }}
        onChange={(event) => {
          const file = event.target.files[0];
        }}
      />

      {/*全体位置指定*/}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          {/*画像位置*/}
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            onClick={() => setimagecrop(true)}
            src={profileFinal.length ? profileFinal : img}
            alt=""
          />

          <Dialog
            visible={imagecrop}
            header={() => <p>プロフィール画像選択</p>}
            onHide={() => setimagecrop(false)}
          >
            <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
            />

            <Button onClick={saveCropImage} label="save" icon="pi pi-check" />
          </Dialog>
        </Grid>

        <Grid>名前</Grid>

        <Grid>
          評価
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <label>実績: 件</label>
        </Grid>

        <Grid>
          <TextField
            id="standard-textarea"
            label="自己紹介"
            placeholder="hello!!"
            multiline
            variant="standard"
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
        <Button
            style={{
            width: "300px",
            height: "50px",
                  }}
            label="コーチングリクエストを送る"
        />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          <Button
           style={{
            width: "300px",
            height: "50px",
                  }}
            label="保留する"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

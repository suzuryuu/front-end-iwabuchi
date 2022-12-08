import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import img from "./user.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Edit() {
  /*プロフィール画像処理*/
  const [imagecrop, setimagecrop] = useState("");
  const [src] = useState(false);
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

  /*タグの一覧 変更する場合はここから*/
  const tag = [
    { label: "ApexLegends" },
    { label: "Splatoon3" },
    { label: "Valolant" },
    { label: "League of Legends" },
  ];

  const tag2 = [
    { label: "ApexLegends" },
    { label: "Splatoon3" },
    { label: "Valolant" },
    { label: "League of Legends" },
  ];

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
          
            /*初期画像*/
            src={profileFinal.length ?profileFinal : img}
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

            <Button onClick={saveCropImage} label="save" icon="pi pi-check"/>
          </Dialog>
        </Grid>

        <Grid>
          <TextField
            id="standard-textarea"
            label="名前"
            placeholder="name"
            multiline
            variant="standard"
          />
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

        <Grid>
          教えたい技術
          <Autocomplete
            multiple
            id="checkbox3"
            options={tag}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="TectingSkill" />
            )}
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          教わりたい技術
          <Autocomplete
            multiple
            id="checkbox3"
            options={tag2}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="CoatingSkill" />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

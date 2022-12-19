import React, { useState } from "react";
import axios from "axios";
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



const baseURL = "https://w24fj3bk3k.execute-api.ap-northeast-1.amazonaws.com/deploy0_0";


export default function Edit() {
  /*プロフィール画像処理*/
  const [imagecrop, setimagecrop] = useState("");
  const [src] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);
  const profileFinal = profile.map((item) => item.pview);
  const [post, setPost] = React.useState(null);
  const data = new FormData();
  
  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  /*受け取り画像処理*/
  const saveCropImage = () => {
    if (pview != pview) {
      setprofile([...profile, { pview }]);
    } else {
      setimagecrop(false);
    }
  };

  /*タグの一覧 変更する場合はここから*/
  const tag = [
    { label: "ApexLegends" },
    { label: "Splatoon3" },
    { label: "Valolant" },
    { label: "League of Legends" },
  ];

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  // 値を変更した時にvalueに一時保存
  const [values, setValues] = React.useState({
    nickname: '',
    intro: '',
    haveSkill: '',
    wantSkill: ''
  });

  //nicknameの値を更新
  const handleChange_nick = nickname => event => {
    setValues({ ...values, [nickname]: event.target.value });
  };

  //introの値を更新
  const handleChange_intro = intro => event => {
    setValues({ ...values, [intro]: event.target.value });
  };

  //haveSkillの値の更新
  const [inputValue_have, setInputValue_have] = React.useState('');

  //wantSkillの値の更新
  const [inputValue_want, setInputValue_want] = React.useState('');


  // //　buttonを押すと呼ばれる
  // //'Access-Control-Allow-Credentials' はAPIGatewayのCORS有効化時にtrueにしてます
  const onClickGetAPI = async() => {
    console.log(values)
    const API_ENDPOINT = " https://2yk1rcryd1.execute-api.ap-northeast-1.amazonaws.com/profile_edit/edit"
    const URL = API_ENDPOINT + values;
    
    try {
        const response = await axios.post(URL,{
          headers: {
            'x-api-key': "RycZ63oLxu4wt31H0wPZc7cT0X6sqgEW3tso8pGI",
            'Access-Control-Allow-Origin': 'http://localhost:3000'
          }
        });
        console.log(response.data)
        alert('リクエストを送信しました')
    } catch (error) {
        console.error(error)
        alert('リクエスト処理に失敗しました')
      }
    }


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
            src={profileFinal.length ? profileFinal : img}
            alt=""
          />

          <Dialog
            visible={imagecrop}
            header={() => <p>プロフィール画像選択</p>}
            onHide={() => setimagecrop(false)} 
          >
            <Button onHide={() => setimagecrop(false)} label="cansel"/> {/*キャンセルボタン*/}
            <Button onClick={saveCropImage} label="save" icon="pi pi-check" />{/*保存ボタン*/}
            <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
            />
          </Dialog>
        </Grid>
       
        <Grid>
          <TextField
            id="standard-textarea"
            label="名前"
            placeholder="name"
            multiline
            variant="standard"
            onChange={handleChange_nick('nickname')}
          />
        </Grid>

        <Grid>
          <TextField
            id="standard-textarea"
            label="自己紹介"
            placeholder="hello!!"
            multiline
            variant="standard"
            onChange={handleChange_intro('intro')}
          />
        </Grid>

        <Grid item xs={5} sm={8} pt={5}>
          教えたい技術
          <div>{`inputValue_have: '${inputValue_have}'`}</div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tag}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Teaching" />}
            //onInputChangeでvaluesにhaveSkillの値を一時的に保存する
            inputValue_have={inputValue_have}
            value={values.haveSkill}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue)
              setInputValue_have(newInputValue)
              setValues({ ...values, haveSkill: newInputValue});
            }}
          />
        </Grid>

        
        <Grid item xs={5} sm={8} pt={5}>
          教わりたい技術
          <Autocomplete
            disablePortal
            id="combo-box-demo2"
            options={tag}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="coaching" />}
            //onInputChangeでvaluesにwantSkillの値を一時的に保存する
            inputValue_want={inputValue_want}
            value={values.wantSkill}
            onInputChange={(event, newInputValue) => {
              console.log(newInputValue)
              setInputValue_want(newInputValue)
              setValues({...values, wantSkill: newInputValue});
            }}
          />
        </Grid>
        

        <Grid item xs={5} sm={8} pt={5}>
          <Button
            onClick={onClickGetAPI}
            variant="outlined"
            color="primary"
            style={{
              width: "60px",
              height: "50px",
              marginLeft: "440px",
            }}
            label="保存"
          />
        </Grid>
      </Grid>
    </Box>
  );
}


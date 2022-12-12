import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "primereact/button";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

function createData(name, promise, Refusal) {
  return { name, promise, Refusal };
}

const label = { inputProps: { "aria-label": "controlled" } };

/*ユーザ表示*/
const rows = [
  createData(
    "user0",
    <Checkbox {...label}/>,
    <Checkbox {...label}/>
  ),
  createData(
    "user1",
    <Checkbox {...label}/>,
    <Checkbox {...label}/>
  ),
  createData(
    "user2",
    <Checkbox {...label}/>,
    <Checkbox {...label}/>
  ),
  createData(
    "user3",
    <Checkbox {...label}/>,
    <Checkbox {...label}/>
  ),
  createData(
    "user4",
    <Checkbox {...label}/>,
    <Checkbox {...label}/>
  ),
];

/*tableの詳細設定*/
export default function BasicTable() {
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>リクエストユーザ一覧</TableCell>
              <TableCell align="right">承諾</TableCell>
              <TableCell align="right">拒否</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {/*ユーザプロフィール画面に*/}
                  <a href="profile.html" style={{color:"blue"}}>{row.name}</a>
                </TableCell>
                {/*チェックの場所*/}
                <TableCell align="right">{row.promise}</TableCell>
                <TableCell align="right">{row.Refusal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

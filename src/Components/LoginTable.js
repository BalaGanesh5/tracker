import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
   
  },
});

function createData(name, totalInvestors, yetToSignUp, totalLogins, lastWeekLogins) {
  return {name, totalInvestors, yetToSignUp, totalLogins, lastWeekLogins };
}

const rows = [
  createData('CHB-0', 73, 26, 115, 5),
  createData('PCC-0', 82, 44, 105, 12),
  createData('CHB-1', 18, 0, 1033, 4),
  createData('PCC-1', 12, 0, 371, 0),
  createData('LCH-G+', 7, 5, 14, 6),
  createData('PCC-soft', 9, 9, 0, 0),
  createData('CHB-soft', 28, 20, 8, 4),
  
];

 function LoginTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="center">Total Investor</TableCell>
            <TableCell align="center">Yet to Sign Up</TableCell>
            <TableCell align="center">Total Logins</TableCell>
            <TableCell align="center">Last week Logins</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.totalInvestors}</TableCell>
              <TableCell align="center">{row.yetToSignUp}</TableCell>
              <TableCell align="center">{row.totalLogins}</TableCell>
              <TableCell align="center">{row.lastWeekLogins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LoginTable

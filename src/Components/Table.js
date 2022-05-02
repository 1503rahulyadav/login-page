import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';



function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Teachers', 'All Access', 4, '1 min ago'),
  createData('External Faculty','Restricted Access', 8, '1 min ago'),
  createData('Lab Assistants', 'Restricted Access', 16, '1 min ago'),
  createData('Non-teaching staff', 'Restricted Access', 4, '1 min ago'),
  createData('Supervisors', 'All Access', 1, '1 min ago'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Department/Role Name</TableCell>
            <TableCell align="right">Accsess Level</TableCell>
            <TableCell align="right">No. of members</TableCell>
            <TableCell align="right">Last updated</TableCell>
            <TableCell/>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Radio />
                {row.name}
              </TableCell>
              <TableCell align="right"><Button variant="outlined" className='access-btn'>{row.calories}</Button>
               </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right"><VisibilityIcon className='visibility-icon'/></TableCell>
    
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

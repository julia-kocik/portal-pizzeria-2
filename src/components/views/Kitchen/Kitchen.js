import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const demoContent = [
  {id: '1', number: 23, details: 'chicken', status: 'to go'},
  {id: '2', number: 22, details: 'salad', status: 'on the spot'},
  {id: '3', number: 21, details: 'grilled cheese', status: 'to go'},
  {id: '4', number: 20, details: 'soup', status: 'on the spot'},
  {id: '5', number: 19, details: 'shake', status: 'to go'},
  {id: '6', number: 18, details: 'chicken', status: 'on the spot'},
  {id: '7', number: 17, details: 'soup', status: 'to go'},
  {id: '8', number: 16, details: 'beef', status: 'on the spot'},
  {id: '9', number: 15, details: 'salmon', status: 'to go'},
  {id: '10', number: 14, details: 'chicken', status: 'on the spot'},
];


const Kitchen = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={styles.component}>
      <Paper className={styles.component}>
        <h3>KITCHEN</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lp.</TableCell>
              <TableCell>Order nr</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>On the spot/to go</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.number}
                </TableCell>
                <TableCell>
                  {row.details}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  <FormControlLabel control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    
                    />} 
                  label="Done" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
export default Kitchen;
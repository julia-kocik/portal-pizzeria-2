import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const demoContent = [
  {id: '1', date: '5/07/2021', status: 'to go', order: 123},
  {id: '2', date: '5/07/2021', status: 'on the spot', order: 88},
  {id: '3', date: '4/07/2021', status: 'to go', order: 44},
  {id: '4', date: '4/07/2021', status: 'on the spot', order: 333},
  {id: '5', date: '3/07/2021', status: 'to go', order: 222},
  {id: '6', date: '3/07/2021', status: 'on the spot', order: 46},
  {id: '7', date: '2/07/2021', status: 'to go', order: 56},
  {id: '8', date: '2/07/2021', status: 'on the spot', order: 87},
  {id: '9', date: '1/07/2021', status: 'to go', order: 26},
  {id: '10', date: '1/07/2021', status: 'on the spot', order: 57},
];



const Dashboard = () => (
  <div className={styles.component}>
    <Paper className={styles.component}>
      <h3>STATISTICS</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lp.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>On the spot/to go</TableCell>
            <TableCell>Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <h3>STATISTICS</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lp.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>On the spot/to go</TableCell>
            <TableCell>Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
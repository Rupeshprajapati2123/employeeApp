import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from 'react'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Typography,

 } from '@material-ui/core';
import EmpDet from './empDet';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: '90vw'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));


function MTable() {
  const classes = useStyles();
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  var s;
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      console.log(response.data)
      setData(response.data);
      setLoading(false);
    };
    
    loadData();
  }, []);

  return (
    <>
     <input
      style={{ width: "30%", height: "25px" }}
      type="text"
      id="inp"
      placeholder="Search..."
      onChange={(e) => setSearchTitle(e.target.value)}
    />
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Id</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date Of Birth</TableCell>
            <TableCell className={classes.tableHeaderCell}>Address</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date_Of_Joining</TableCell>
            <TableCell className={classes.tableHeaderCell}>Salary</TableCell>
            <TableCell className={classes.tableHeaderCell}>Designation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <div style={{display:"none"}}>
              {s="/emp/"+row.first_name.toLowerCase()}</div>
              <TableCell>
                  <Grid container>
                  
                      <Grid item lg={10}>
                      <Typography className={classes.name}>
                        <Link to={s}>{row.id}</Link>
                        {/* <Link to='/emp'>{row.id}</Link> */}
                      </Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.first_name+" "}{row.last_name}</Typography>
                  
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.date_of_birth}</Typography>
              </TableCell>
              <TableCell>  
              <Typography color="primary" variant="subtitle2">{row.address}</Typography>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.date_of_joining}</Typography>
                  
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.salary}</Typography>
                  
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.designation}</Typography>
                  
                </TableCell>
            </TableRow>
          ))}
          
        </TableBody>

      </Table>
    </TableContainer>
    
    </>
  );
}

export default MTable;
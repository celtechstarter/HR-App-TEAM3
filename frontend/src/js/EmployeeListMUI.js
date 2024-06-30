
import { getBarLevelsForScore, getColorForLevel } from './Utils'; 
import {getEmployees} from './ClientApi'

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 


const EmployeeListMui = () => {
    
  const [employeeData, setEmployeeData] = useState(null);
  const [layout, setLayout] = useState("simple");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isDataFromLocal = true;
        const data = await getEmployees(isDataFromLocal); // Aufruf der async Funktion getEmployees -API
        const apiLayout = data.layout;
        //setHRData(data); // Setzen der empfangenen Daten in den State
        
        setEmployeeData(data);
        setLayout(apiLayout); 

      } catch (error) {
        console.error('Error fetching HR data:', error);
        // Hier könntest du zusätzliche Fehlerbehandlung durchführen, z.B. eine Fehlermeldung anzeigen
        return <p>Loading... Error </p>; // Anzeige während des Ladens der Daten
      }
    };

    fetchData(); // Aufruf der fetchData Funktion, die getHRData aufruft

  }, [employeeData, layout]); // Leeres Array als zweites Argument für useEffect bedeutet, dass es nur einmalig beim Laden der Komponente ausgeführt wird

  if (!employeeData) {
    return <p>Loading...</p>; // Anzeige während des Ladens der Daten
  }
return (
  <div class={layout}>
     <div class="logo" >
        <img src={employeeData.logo_url}  alt={employeeData.company}/>
     </div>
    <h2 class="pageTitle" >Mitarbeiterliste von {employeeData.company}</h2>

    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Personal ID</TableCell>
            <TableCell align="right">Enty Date</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.employees.map((employee) => (
            <TableRow
              key={employee.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.first_name}
              </TableCell>
             
              <TableCell align="right">{employee.last_name}</TableCell>
              <TableCell align="right">{employee.pers_id}</TableCell>
              <TableCell align="right">{employee.entry_date}</TableCell>
              <TableCell align="right">{employee.position}</TableCell>
              <TableCell align="right">
              <div class="score">
                {getBarLevelsForScore(employee.ma_score).map((level, index) => (
                  <div class="scoreItem"
                    key={index}
                    style={{ 
                      flex: `${level}%`, 
                      backgroundColor: getColorForLevel(employee.ma_score, index),
                      borderRight: getColorForLevel(employee.ma_score, index) !== 'white' ? 'none' : 'none'
                      }}
                  ></div>
                ))}
              </div>
             
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
    <ul class="list" >
      {employeeData.employees.map(employee => (
        <li class="listItem" key={employee.pers_id} >
            <div class="persdate" >
            
              <div class="fname">{employee.first_name}</div>
              <div class="separator" >|</div>
              <div class="lname">{employee.last_name}</div>
              <div class="separator">|</div>
              <div class="persid">{employee.pers_id}</div>
              <div class="separator">|</div>
              <div class="edate">{employee.entry_date}</div>
              <div class="separator">|</div>
              <div class="position">{employee.position}</div>
              <div class="separator">|</div>
            
              <div class="score">
                {getBarLevelsForScore(employee.ma_score).map((level, index) => (
                  <div class="scoreItem"
                    key={index}
                    style={{ 
                      flex: `${level}%`, 
                      backgroundColor: getColorForLevel(employee.ma_score, index),
                      borderRight: getColorForLevel(employee.ma_score, index) !== 'white' ? 'none' : 'none'
                      }}
                  ></div>
                ))}
              </div>
              
              
                          
              <div class="action-list-item">
                  <Link to={`/employee/${employee.pers_id}`} > <button class="viewButton"  >Details</button> </Link>
              </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default EmployeeList;
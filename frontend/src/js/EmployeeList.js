
import { getBarLevelsForScore, getColorForLevel } from './Utils'; 
import {getEmployees} from './ClientApi'

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const EmployeeList = () => {
    
  const [employeeData, setHRData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isDataFromLocal = true;
        const data = await getEmployees(isDataFromLocal); // Aufruf der async Funktion getHRData
        setHRData(data); // Setzen der empfangenen Daten in den State


      } catch (error) {
        console.error('Error fetching HR data:', error);
        // Hier könntest du zusätzliche Fehlerbehandlung durchführen, z.B. eine Fehlermeldung anzeigen
        return <p>Loading... Error </p>; // Anzeige während des Ladens der Daten
      }
    };

    fetchData(); // Aufruf der fetchData Funktion, die getHRData aufruft

  }, [employeeData]); // Leeres Array als zweites Argument für useEffect bedeutet, dass es nur einmalig beim Laden der Komponente ausgeführt wird

  if (!employeeData) {
    return <p>Loading...</p>; // Anzeige während des Ladens der Daten
  }
return (
  <div class="extended">
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
     <img src='./images/logo/apple-touch-icon.png' alt=""/>
     </div>
    <h2 style={{ marginBottom: '20px', textShadow:'2px 2px 7px'}}>Mitarbeiterliste von {employeeData.company}</h2>
    
    <ul style={{ listStyleType: 'none', padding: 0, minWidth: 400 }}>
      {employeeData.employees.map(employee => (
        <li key={employee.pers_id} style={{ marginBottom: 20, backgroundColor: 'rgb(204, 204, 204)', border: 'none', borderRadius: '5px', boxShadow: '3px 3px 7px', padding: 10, minWidth: 400 }}>
          <div class="persdate" style={{ marginBottom: 10, display: 'flex', alignItems: 'center'}}>
          
            <div class="fname">{employee.first_name}</div>
            <div style={{margin: '0 10px'}} className="separator">|</div>
            <div class="lname">{employee.last_name}</div>
            <div style={{margin: '0 10px'}} className="separator">|</div>
            <div class="persid">{employee.pers_id}</div>
            <div style={{margin: '0 10px'}}className="separator">|</div>
            <div class="edate">{employee.entry_date}</div>
            <div style={{margin: '0 10px'}}className="separator">|</div>
            <div class="bdate">{employee.birthdate}</div>
            <div style={{margin: '0 10px'}}className="separator">|</div>
           
            <div style={{ display: 'flex', height: 15, width: '350px', marginBottom: 5, border: 'none' }}>
              {getBarLevelsForScore(employee.ma_score).map((level, index) => (
                <div
                  key={index}
                  style={{ border: 'none', borderRadius: '5px', boxShadow: '2px 2px 7px', marginRight: '2px',
                    flex: `${level}%`,
                    backgroundColor: getColorForLevel(employee.ma_score, index),
                    borderRight: getColorForLevel(employee.ma_score, index) !== 'white' ? 'none' : 'none'
                  }}
                ></div>
              ))}
            </div>
            
            <div style={{margin: '0 10px'}} class="score">{employee.ma_score}</div>
                        
           <div>
            
            <Link to={`/employee/${employee.pers_id}`} >
            
              <button style={{ marginLeft: '50px',borderRadius: '3px', border: 'none', boxShadow: '2px 2px 7px',}} >Details</button>
              
            </Link>
            
          </div>
        </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default EmployeeList;
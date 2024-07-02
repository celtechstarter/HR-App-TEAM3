
import employeeData from '../data/employees.json'; 
import userData from '../data/users.json'; 
import tenantData from '../data/tenants.json'; 
import React from "react";



const EmployeeList = () => {
  return ( 
  //Anfang--------
  
  <div>
    <div>
      {employeeData.company}
      {employeeData.employees.map((employee) => (
       <div key={employee.pers_id}>
            <div>{employee.pers_id}</div> 
            <div>{employee.first_name}</div>
            <div>{employee.last_name}</div>
            <div>{employee.gender}</div>
            <div>{employee.title}</div>
            <div>{employee.position}</div>
            <div>{employee.department}</div>
            <div>{employee.email}</div>
            <div>{employee.phone}</div>
            <div>{employee.image}</div>
            <div>{employee.birthdate}</div>
            <div>{employee.age}</div>
            <div>{employee.ma_score}</div>
            <div>{employee.address}</div>
            <div>{employee.entry_date}</div>
            <div>{employee.exit_date}</div>
            <div>{employee.vacation_days}</div>
            <h2>Skills</h2>
            {employee.skills.soft_skills.teamwork}<br/>
            {employee.skills.soft_skills.communication}<br/>
            {employee.skills.soft_skills.leadership}<br/>
            {employee.skills.soft_skills.problem_solving}<br/>
            {employee.skills.soft_skills.adaptability}<br/>
            {employee.skills.personal_skills.punctuality}<br/>
            {employee.skills.personal_skills.friendliness}<br/>
            {employee.skills.personal_skills.creativity}<br/>
            {employee.skills.personal_skills.reliability}<br/>
            {employee.skills.personal_skills.initiative}<br/>
         
            
            
           
    </div>
    

  ))}
  <hr></hr>
</div>


<div>
          {employeeData.company}
          {userData.users.map((user) => (
            <div key={user.userId}>
            <div>{user.userId}</div>
            <div>{user.tenantId}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.password}</div>
            <div>{user.email}</div>
            <div>{user.admin ? 'true' : 'false'}</div>

            </div>
          ))}
  <hr></hr>        
        </div>
        <div>
          {employeeData.company}
          {tenantData.tenants.map((tenant) => (
            <div key={tenant.tenantId}>
            <div>{tenant.tenantId}</div>
            <div>{tenant.name}</div>
            

            </div>
          ))}
        </div>
  </div>//Ende-------
  );

};

export default EmployeeList;
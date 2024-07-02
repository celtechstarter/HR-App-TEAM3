import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import TenantList from './TenantList';
import TenantNew from './TenantNew'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/tenant" element={<TenantList />} />
        <Route path="/tenant/new" element={<TenantNew />} />
      </Routes>
    </Router>
  );
}

export default App; 
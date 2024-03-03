import React from 'react';

const AllEmployees = ({ employees }) => {
  return (
    <div>
      <h3>All Employees</h3>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Date of Birth</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.dob}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;

// UserList.js
import React from 'react';

const UserList = () => {
  // Dummy employee data
  const employees = [
    { id: 1, name: 'John Doe', dob: '1990-01-01', role: 'Developer' },
    { id: 2, name: 'Jane Smith', dob: '1995-05-05', role: 'Manager' },
    { id: 3, name: 'Alice Johnson', dob: '1985-10-10', role: 'Designer' },
  ];

  return (
    <div>
      <h2>User List</h2>
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

export default UserList;

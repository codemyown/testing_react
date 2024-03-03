import React from 'react';

const SearchResults = ({ filteredEmployees }) => {
  return (
    <div>
      {filteredEmployees.length === 0 ? (
        <p>No matching results found.</p>
      ) : (
        <div>
          <h3>Search Results</h3>
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
              {filteredEmployees.map((employee) => (
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
      )}
    </div>
  );
};

export default SearchResults;

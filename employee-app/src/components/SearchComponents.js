import React, { useState } from 'react';
import SearchResults from './SearchResult';
import AllEmployees from './AllEmployee';

const SearchComponent = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Component</h2>
      <input type="text" placeholder="Search by Employee Name" value={searchTerm} onChange={handleSearch} />
      {searchTerm ? (
        <SearchResults filteredEmployees={filteredEmployees} />
      ) : (
        <AllEmployees employees={employees} />
      )}
    </div>
  );
};

export default SearchComponent;

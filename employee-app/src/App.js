import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import SearchComponent from './components/SearchComponents';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <HomePage onLogout={handleLogout} />
          <SearchComponent employees={[
            { id: 1, name: 'John Doe', dob: '1990-01-01', role: 'Developer' },
            { id: 2, name: 'Jane Smith', dob: '1995-05-05', role: 'Manager' },
            { id: 3, name: 'Alice Johnson', dob: '1985-10-10', role: 'Designer' },
          ]} />
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
  
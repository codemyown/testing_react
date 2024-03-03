import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if username and password are correct (You can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Wrong credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

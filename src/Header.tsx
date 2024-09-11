import React, { useState } from 'react';

interface User {
  email: string;
  password: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando o login (aqui você pode adicionar sua lógica de autenticação)
    if (email === 'userrrr@example.com' && password === 'password') {
      setUser({ email, password });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Simulando o logout
    setUser(null);
    setEmail('');
    setPassword('');
  };

  return (
    <header>
      {user ? (
        <div>
          <span>Bem-vindo, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function validate(e) {
    e.preventDefault(); 

    if (name === 'admin' && password === 'admin123') {
      alert('Login Successful');
     navigate('/valid');
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={validate}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
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
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { login } from '../features/authSlice';
// import '../styles/login.scss';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
  

//   const validateForm = () => {
//     const capitalLetterRegex = /[A-Z]/;
//     const alphanumericRegex = /^[a-zA-Z0-9]*$/;
//     const noWhitespaceRegex = /^\S*$/;

//     if (!capitalLetterRegex.test(password)) {
//       setError('Password must contain at least one capital letter.');
//       return false;
//     }

//     if (!alphanumericRegex.test(password)) {
//       setError('Password must be alphanumeric.');
//       return false;
//     }

//     if (!noWhitespaceRegex.test(password)) {
//       setError('Password must not contain any white spaces.');
//       return false;
//     }

//     setError('');
//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm() && username && password) {
//       console.log('Username:', username);
//       console.log('Password:', password);

//       dispatch(login(username));
      
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/authSlice';
// import '../styles/login.scss';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();

//   const validateForm = () => {
//     // Regex for at least one capital letter
//     const capitalLetterRegex = /[A-Z]/;
//     // Regex for alphanumeric (letters and numbers) and at least one letter
//     const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
//     // Regex for no whitespace
//     const noWhitespaceRegex = /^\S*$/;

//     if (!capitalLetterRegex.test(password)) {
//       setError('Password must contain at least one capital letter.');
//       return false;
//     }

//     if (!alphanumericRegex.test(password)) {
//       setError('Password must be alphanumeric and contain at least one letter and one number.');
//       return false;
//     }

//     if (!noWhitespaceRegex.test(password)) {
//       setError('Password must not contain any white spaces.');
//       return false;
//     }

//     setError('');
//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm() && username && password) {
//       console.log('Username:', username);
//       console.log('Password:', password);

//       dispatch(login(username));
//       // Redirect to dashboard or any other page
//        navigate('/dashboard');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import '../styles/login.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use the useNavigate hook

  const validateForm = () => {
    // Regex for at least one capital letter
    const capitalLetterRegex = /[A-Z]/;
    // Regex for alphanumeric (letters and numbers) and at least one letter
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    // Regex for no whitespace
    const noWhitespaceRegex = /^\S*$/;

    if (!capitalLetterRegex.test(password)) {
      setError('Password must contain at least one capital letter.');
      return false;
    }

    if (!alphanumericRegex.test(password)) {
      setError('Password must be alphanumeric and contain at least one letter and one number.');
      return false;
    }

    if (!noWhitespaceRegex.test(password)) {
      setError('Password must not contain any white spaces.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && username && password) {
      console.log('Username:', username);
      console.log('Password:', password);

      dispatch(login(username));
      // Redirect to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

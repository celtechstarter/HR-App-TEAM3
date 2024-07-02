import React, { useState } from 'react';
const imgUrl='../images/logo/android-chrome-512x512.png';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'bad@mofo.com' && password === '123456') {
        setAccessGranted(true);
        setTimeout(() => {
          setAccessGranted(false);
        }, 5000);
      } else if (password !== 'correctPassword') {
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 5000);

      } else {
        // Erfolgreiche Authentifizierung
        console.log('Authenticated successfully');
      } 
    
    console.log('Email:', email);
    console.log('Password:', password);

  };

 

  const closeWarning = () => {
      setShowWarning(false);
    
  };

  return (
    
    <div className="loginContainer">
      {showWarning && (
        <div className={`warningPopup ${showWarning ? 'visible' : ''}`}>
          <div className="warningContent">
            <span className="closeBtn" onClick={closeWarning}>&times;</span>
            <p>Wrong password!</p>
            <p>Try again.</p>
          </div>
        </div>
      )}
      {accessGranted && (
        <div className="accessPopup visible">
          <div className="accessContent">
            <span className="closeBtn" onClick={closeAccessGranted}>&times;</span>
            <p>Access granted</p>
          </div>
        </div>
      )}
    
    <img src={imgUrl} alt="Logo" className="logo" />
    
 <div className="loginItem">
      <h2 className='pageTitle'>Welcome back!</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <div>
          <label htmlFor="email"></label>
          <input
            placeholder="Bitte Email eingeben"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label htmlFor="password"></label>
          <input
             placeholder="Bitte Passwort eingeben"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
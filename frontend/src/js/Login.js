import React, { useState } from 'react';
const imgUrl='../images/logo/android-chrome-512x512.png';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitting...');

    if (email === 'bad@mofo.com' && password === '123456') {
        console.log('Acces granted');
        setAccessGranted(true);
        setTimeout(() => {
          setAccessGranted(false);
        }, 5000);
      } else  {
        console.log('Wrong credentials')
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 5000);

    }
    
    console.log('Email:', email);
    console.log('Password:', password);

  };

 

  const closeWarning = () => {
      setShowWarning(false);
    
  };

  const closeAccessGranted = () => {
    setAccessGranted(false);
  };


  return (
    <div className="loginContainer">
      
        <div className={`warningPopup ${showWarning ? 'visible' : ''}`}>
          <div className="warningContent">
            <span className="closeBtn" onClick={closeWarning}>&times;</span>
            <p>Wrong credentials!</p>
            <p>Try again.</p>
          </div>
        </div>
      
        
        <div className={`accessPopup ${accessGranted ? 'visible' : ''}`}>
          <div className="accessContent">
            <span className="closeBtn" onClick={closeAccessGranted}>&times;</span>
            <p>Access granted</p>
          </div>
        </div>
        
      <img src={imgUrl} alt="Logo" className="logo" />
      <div className="loginItem">
        <h2 className="pageTitle">Welcome back!</h2>
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
            <br />
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
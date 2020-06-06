import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import './style.css';

const App = () => {
  const [user, setUser] = useState(undefined)

  const logout = (response) => {
    console.log(response)
  }
   const responseGoogle = (response) => {
      setUser(response);
  }
   const handleFailure = (response) => {
      console.log(response);
  }

  return(
    <div>
    { user === undefined ? 
      <GoogleLogin
          clientId="your-google-client-key"
          buttonText="Login wth Google"
          onSuccess={responseGoogle}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
      /> : 
      <div>
        <h2>Hi, {user.profileObj.name}</h2>
        <GoogleLogout
          clientId="your-google-client-key"
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      </div>
      
    }
    </div>
  );
}
    

render(<App />, document.getElementById('root'));

import React from 'react';
import { getLoginUrl } from "../../spotify";
import './login.css';

export default function Login() {

  const handleLogin = async () => {
    const url = await getLoginUrl();
    window.location.href = url;
  };

  return (
    <div className='login-page'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt='spotify logo'
        className='logo'
      />

      <div className='login-btn' onClick={handleLogin}>
        LOG IN
      </div>
    </div>
  );
}
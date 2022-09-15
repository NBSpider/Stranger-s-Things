import React, { useState } from 'react';
import { loginUser } from '../api';
import { Button, TextField } from '@mui/material';

const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
      navigate('/profile');
    } else {
      console.log(results.error.message)
    }
  }
  
  return (
    <form className='Login' onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <TextField className='enterLoginUsername'
        label='username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField className='enterLoginPassword'
        label='password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Login;
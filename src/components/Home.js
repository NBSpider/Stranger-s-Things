import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <h1 className='welcomeHomeBanner'>Welcome to Stranger's Things!</h1>
      <Button>
        <Link to='/posts/create-post'>Add a Post</Link>
      </Button>
    </div>
  )
}

export default Home;
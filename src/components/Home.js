import React from 'react';
import { Link } from 'react-router-dom';
import logoIMG from './images/Dumbstockimage.jpg'

const Home = () => {
  return (
    <div>
      <h1 className='welcomeHomeBanner'>Welcome to Stranger's Things!</h1>
      <img src={logoIMG} style={{backgroundPosistion: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
    </div>
  )
}

export default Home;
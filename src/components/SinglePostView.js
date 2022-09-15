import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api';
import { Button, TextField, Paper } from '@mui/material';
import logoIMG from './images/Danceman.gif'

const SendMessage = ({ postID, token }) => {
  const [message, setMessage] = useState({content: ''});
  // we need 3 things to make this request
    // Post-id, token, message object containing the content of the message
    
  async function addMessage() {
    await createMessage({postID, message, token})
  }
  
  return (
    <form onSubmit={ (ev)=> {
      ev.preventDefault();
      addMessage();
    }}>
      <TextField
        type='text'
        placeholder='Enter Message'
        onChange={ (ev) => setMessage({content: ev.target.value}) }
      />
      <Button type='submit'>Send Message</Button>
    </form>
  )
}

const SinglePostView = ({ posts, token }) => {
  const [activateMessage, setActivateMessage] = useState(false);
  
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  return (
    <div>
     <Paper style={{padding: '20px', margin:'20px'}} elevation={7} >
      <img src={logoIMG} style={{backgroundPosistion: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
      <div>
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Will Deliver: {willDeliver}</p>
      </div>
      <Button onClick={() => setActivateMessage(!activateMessage)}>Message this user</Button>
      </Paper>
      {
        activateMessage && <SendMessage postID={postID} token={token}/>
      }
    </div>
  )
}

export default SinglePostView;
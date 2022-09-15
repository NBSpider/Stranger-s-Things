import { Paper } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;
  
  console.log(user)
  
  return (
    <div>
      <div>
        <h1>Messages from other users!</h1>
        {
          messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.post;
            
            if (userID !== fromUserID) {
              return (
                <div key={message._id}>
                  <Paper style={{padding: '20px', margin:'20px'}} elevation={7} >
                  <p className='fromUser'>From User: {username} </p>
                  <p className='Messsage'>Message: {message.content}</p>
                  <p className='postReference'>Post Reference: {title}</p>
                  </Paper>
                </div>
              )
            }
          })    
        }
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
        messages.map(message => {
            const{content, fromUser, post,_id}=message
            if (userID === fromUser._id) {
              return (
                <div>
                  <Paper style={{padding: '20px', margin:'20px'}} elevation={7} >
                <div key={_id}>{content}</div>
                <p>Message
                  <Link 
                  to = {`path=/posts/:${post._id}`}
                  >
                    {post.title}
                  </Link>
                </p>
                  </Paper>
                </div>
                )
            }
          })    
        }
      </div>
    </div>
  )
}

export default Profile;
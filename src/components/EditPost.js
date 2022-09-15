import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost, deletePost } from '../api';
import { Button, TextField} from '@mui/material';

const EditPost = ({ posts, token }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
  }
  
  
  return (
    <form className='editForm' onSubmit={ (ev) => {
      ev.preventDefault();
      editPost();
      
    }}>
      
      <TextField className='editTitle'
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
      <TextField className='editDescription'
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />
      <TextField className='editLocation'
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />
      <TextField className='editPrice'
        type='text'
        placeholder={price}
        onChange={(ev) => setNewPrice(ev.target.value)}
      />
      <TextField className='newWillDeliver'
        type='checkbox'
        checked={newWillDeliver}
        onChange={(ev) => setNewWillDeliver(ev.target.checked)}
      />
      <Button type='submit'>Edit Post</Button>
      <Button type="submit" onClick={() =>{ 
      deletePost(token,postID);
      }}>       
      Delete</Button>
    </form>
  )
}

export default EditPost;
import React from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {
  const newPost = {
    title: 'Most sane Florida Individual',
    description: "I had a hotdog the other day, and a crow swooped down from out of nowhere and took my hotdog just took it. Naturally I chased it down, I mean really chased it down. I found the crow's nest and took it down, it's illegal to kill crow's in my state because they're 'endangered' or something. Whatever anyway the point is I got a bird corpse in my backyard and I need to dispose of it, if anyone wants it you can come to my place.",
    price: "I don't care just get rid of it",
    location: 'FL',
    willDeliver: false
  }
  
  async function addPost() {
    const results = await createPost(token, newPost)
    fetchPosts();
    navigate('./posts')
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <button onClick={() => addPost()}>Create a New Post</button>
  )
}

export default CreatePost;
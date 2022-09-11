import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  function postMatches(post, string) {
      const{ title, description} = post;
  
      if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
          return post;
      }
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 
  }
  
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className='outerDiv' id='outer div element'>
       <div className='searchedPost'>
          <form onSubmit={(event) => {
              event.preventDefault();
          }}> 
            <TextField
             type = 'text'
             placeholder = 'Search'
             onChange = {(event) => setSearchTerm(event.target.value)}
            ></TextField>
            <Button type='Search'>Search</Button>
           </form>  
          </div>
    {
      postsToDisplay.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          <div className='postHolder' key={_id}>
            <h3 className='postTitle'>{title}</h3>
            <p className='postDescription'>Description: {description}</p>
            <p className='postPrice'>Price: {price}</p>
            <p className='postLocation'>Location: {location}</p>
            {
              isAuthor ? (
                
              
                
                
                <Button>
                  <p className='isAuthor'>Is Author </p>

                  <br></br>

                  <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                  
                </Button>
              ) : (
                
                <Button>
                  <Link class="ViewButton" to={`/posts/${_id}` }>View</Link>
                </Button>
              )
            }
          </div>
        )
      })
    }
  </div>
  )
}


export default Posts;
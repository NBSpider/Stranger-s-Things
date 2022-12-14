import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIMG from './images/Corndogman.jpg'

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
         <Paper style={{padding: '20px', margin:'20px'}} elevation={7} >
          <form onSubmit={(event) => {
            event.preventDefault();
          }}> 
            <TextField className='searchBar'
             label='search' style={{width: '100%', margin: '.8rem'}}
             onChange = {(event) => setSearchTerm(event.target.value)}
             ></TextField>
           </form>  
            </Paper>
          </div>
        <Button varient='outlined'>
       <Link to='/posts/create-post'>Add a Post</Link>
      </Button>
    {
      postsToDisplay.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          <Paper style={{padding: '20px', margin:'20px'}} elevation={7}>
              <img src={logoIMG} style={{backgroundPosistion: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
          <div key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            {  
              isAuthor ? (
                
              
                
                
                <Link to={`/posts/edit-post/${_id}`}>
                <Button>
                Edit
                </Button>
                </Link>
              ) : (
                
                  <Link class="ViewButton" to={`/posts/${_id}` }>
                <Button>
                View
                </Button>
                </Link>
              )
            }
          </div>
          </Paper>
        )
      })
    }
  </div>
  )
}


export default Posts;
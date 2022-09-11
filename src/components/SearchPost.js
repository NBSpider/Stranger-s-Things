import React, {useState} from 'react';

const SearchPost = (posts) => {

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



// then, in our jsx below... map over postsToDisplay instead of posts

return (
    <div className='searchedPost'>
        <form onSubmit={(event) => {
            event.preventDefault();
        }}> 
          <input
           type = 'text'
           placeholder = 'Search'
           onChange = {(event) => setSearchTerm(event.target.value)}
          ></input>
          <button type='Search'>Search</button>
         </form>  
        </div>
)
}

export default SearchPost;
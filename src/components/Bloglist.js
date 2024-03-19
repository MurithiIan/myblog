// This is where the Display of the blogs will be and the Objects will be passed
import { Link } from 'react-router-dom';

import React from 'react';



const Bloglist = ({ blogs, title }) => {
  console.log("Received blogs:", blogs); // Log the received blogs prop

  if (!blogs || blogs.length === 0) {
    console.log("No blogs found");
    return <div>No blogs found</div>;
       {/* Display a message if no blogs from the db are found */}
  }

  return (
    <div className="blog-list">
      <h2 className='lists'>List of Blogs</h2>
      {blogs.map((bloog) => (        //this is where blogs.map will be used to map the objects from the db and its assigned as blog parameter
        <div className='preview' key={bloog.id}>
        <Link to={`/BlogDetail/${bloog.id}`} >
          <h2>{bloog.title}</h2>
          <p>Written by {bloog.author}</p>
        </Link> 
      </div>
      ))}
    </div>
  );
}

export default Bloglist;
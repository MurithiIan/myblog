import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {ToastContainer} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';



function Create() {

  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [body , setBody] = useState("");

 

  const [data, setData] = useState({
    title: title,
    author: author,
    body: body
  });

  


  const handleChange = (e) => {
    e.preventDefault();
  
    // Create a new object with the current values of title, author, and body
    const newData = {
      title: title,
      author: author,
      body: body
    };

    const validation = () => {
      if (!title || !author || !body) {
        
        alert('All fields are required');
      }
    }
  
    // Make a POST request using axios with the updated data

    
    axios.post('http://localhost:4000/blogs', newData)

      .then(response => {
        console.log(response.data);
        alert('Blog has been created!');
      })
      .catch(err => {
        alert('Error');
      });
  }
  return (
    <div>
      <Form onSubmit={handleChange}>
        <h2>New Blog Form</h2><br />
        <div className="form-group">
          <div className='Blog-tittle'>
            <FloatingLabel controlId="floatingInput" for="exampleInputEmail1">Blog Title</FloatingLabel>
            <Form.Control style={{ padding: '10px' }} value={title} onChange={(e) => setTitle(e.target.value)}  placeholder='Blog Title' type="text"  defaultValue="" /><br />
          </div>

          <div className='Blog-Author'>
            <FloatingLabel controlId="floatingInput" for="exampleInputEmail1">Blog Author</FloatingLabel>
            <Form.Control style={{ padding: '10px' }}  value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Blog Author'  type="text" defaultValue="" /><br />
          </div>

          <div className='Blog-Body'>
            <FloatingLabel controlId="floatingInput" for="exampleInputEmail1">Blog Body</FloatingLabel>
            <Form.Control style={{ padding: '30px' }} value={body} onChange={(e) =>setBody(e.target.value)} placeholder='Body' type="text"  defaultValue="" /><br />
          </div>
          <div className='submit'>
            <button  type="submit" className="btn btn-primary">Save blog</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Create;
import React from 'react';
import {Button, Form }from 'react-bootstrap';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create=()=> {
  const history = useHistory();
  const [data, setData]=useState({
    title:"",
    body:"",
    author:"",
  })
  const handleChange = (e)=>{
    const {name, value}=e.target;
    setData((prev)=>{
      return {...prev,[name]:value}
    })
  }
  const handleSubmit = (e)=>{
    e.peventDefault();

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"content-type":"apllication/json"},
      body: JSON.stringify(data)
  }).then(()=>{
    console.log('new blog added');
    history.push('/');
  })
}
  
  return (
<div className='create'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="blog_title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required onChange={handleChange} name="title" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="body_post">
        <Form.Label>Enter post</Form.Label>
        <Form.Control type="textarea" required onChange={handleChange} name="body" placeholder="type blog..." rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>author</Form.Label>
        <Form.Control type="text" required onChange={handleChange} name="author" placeholder="author of the blog" />

      </Form.Group>
      <Button variant="primary" type="submit">
        Save blog
      </Button>
    </Form>
</div>    
  );
}

export default Create;
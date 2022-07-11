import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://posts.com/posts/create', { title });
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor={`content-${title}`}>Ttitle</label>
          <input
            id={`content-${title}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

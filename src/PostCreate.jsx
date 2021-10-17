import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', { title });
    setTitle('');
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

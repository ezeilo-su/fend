import axios from 'axios';
import React, { useState } from 'react';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://posts.com/posts/${postId}/comments`, {
        content,
      });
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor={`content-${postId}`}>New Comment</label>
          <input
            id={`content-${postId}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

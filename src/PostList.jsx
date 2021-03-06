import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate.jsx';
import CommentsList from './CommentsList.jsx';

export default function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://posts.com/posts');
        console.log(res.data);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className='card'
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className='card-body'>
          <h3>{post.title}</h3>
          <CommentsList comments={post.comments} />
          <hr />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
}

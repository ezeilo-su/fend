import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    })();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}



import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../services/blogApi';
import './PostDetail.scss';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useGetPostByIdQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    let errorMessage = 'An unknown error occurred.';

    if ('status' in error) {
      // Error from the API response
      if (error.data && typeof error.data === 'object' && 'message' in error.data) {
        errorMessage = (error.data as { message: string }).message;
      } else {
        errorMessage = `An error occurred: ${error.status}`;
      }
    } else if (error instanceof Error) {
      // Client-side error (e.g., network error)
      errorMessage = error.message;
    }

    console.error('Error details:', error); // Log error for debugging

    return <p>{errorMessage}</p>;
  }

  return (
    <div className="post-detail">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetail;

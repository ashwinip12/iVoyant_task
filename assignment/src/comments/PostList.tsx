
import React from 'react';
import { useGetPostsQuery } from '../services/blogApi';
import './PostList.scss';

const PostList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

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
    <div className="post-list">
      {posts?.map((post) => (
        <div key={post.id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

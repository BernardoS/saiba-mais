import React from 'react';
import { useParams } from 'react-router-dom';

const EditPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Edit Post Page</h1>
      <p>Form to edit post with ID: {id} will go here.</p>
    </div>
  );
};

export default EditPostPage;
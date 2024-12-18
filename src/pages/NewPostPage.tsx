import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePostForm from '../components/CreatePostForm';
import { Post } from '../types/Post';
import { auth } from '../services/firebase';
import api from '../services/api';
import Header from '../components/Header';
import styled from "styled-components";

export const SavePostContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const SavePostContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
    width:100%;
`;

export const SavePostTitle = styled.div`

    h1{
        font-size:48px;
        font-weight:700;
        color:#1E4071;
    }
`;




const NewPostPage: React.FC = () => {
  const navigate = useNavigate();

  const createPost = async (post: Omit<Post, '_id' | 'modifyDate' | 'createdAt' | 'updatedAt' | '__v'>) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken(true); // Force refresh the token
        await api.post('/admin/posts', post, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate('/admin');
      } else {
        console.error('User is not authenticated');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <SavePostContainer>
      <Header />
      <SavePostContent className="content-container">
        <SavePostTitle>
          <h1>Novo post</h1>
        </SavePostTitle>
        <CreatePostForm onCreate={createPost} />
      </SavePostContent>
    </SavePostContainer>
  );
};

export default NewPostPage;
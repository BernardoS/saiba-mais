import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import PostList from '../components/PostList';
import { Post } from '../types/Post';
import { auth } from '../services/firebase';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SecondaryButton } from '../components/GenericStyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { device } from '../layoutBreakpoints';

export const ManagePostsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const ManagePostsContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
    width:100%;
    @media ${device.laptop} {
      width: 80%;
      display: flex;
      flex-direction: column;
    }
`;

export const ManagePostsTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    h1{
        font-size:32px;
        color:#1E4071;
        font-weight:700;
    }
    h1.main-title{
        font-size:48px;
    }

    @media ${device.mobile} {
      h1{
          font-size:24px;
          color:#1E4071;
          font-weight:700;
      }
      h1.main-title{
          font-size:24px;
          font-weight:900;
      }
    }

`;

export const SearchAdminInputContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;
`;

export const SearchInputText = styled.input`
    width:100%;
    border:2px solid #08244B;
    border-radius:25px;
    height:64px;
    padding-left:32px;
    font-family:"Maven Pro", sans-serif;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
`;

export const SearchButton = styled.button`
    background-color:transparent;
    border:none;
    font-size:25px;
    width:25px;
    color: #08244B;
    cursor:pointer;
    position: absolute;
    right:35px;
    transition:0.3s;
    &:hover{
        color:#1E4071;
        opacity:0.8;
    }
`;




const AdminPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken(true); // Force refresh the token
        console.log("JWT" + token)
        const response = await api.get('/admin/posts/admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } else {
        console.error('User is not authenticated');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleAddPost = () => {
    navigate('/admin/new-post');
  };

  return (
    <ManagePostsContainer>
      <Header />
      <ManagePostsContent className="content-container" >
        <ManagePostsTitle>
          <h1 className="main-title">Área do professor</h1>
          <SecondaryButton
            type="button"
            onClick={handleAddPost}
          >
            <FontAwesomeIcon icon={faPlus} />
            Adicionar post
          </SecondaryButton>
        </ManagePostsTitle>
        <ManagePostsTitle>
          <h1>Todos os posts</h1>
        </ManagePostsTitle>

        <PostList posts={posts} />

      </ManagePostsContent>

      <Footer />
    </ManagePostsContainer>
  );
};

export default AdminPage;
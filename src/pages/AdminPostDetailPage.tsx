import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import UpdatePostForm from '../components/UpdatePostForm';
import PostBannerImage from "../assets/generic-post-image.png";
import { Post } from '../types/Post';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FormFooter, FormSeparator } from '../components/CreatePostForm';
import { PrimaryButton, SecondaryButton } from '../components/GenericStyledComponents';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../layoutBreakpoints';

export const ReadPostContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const ReadPostContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
    width: 100%;
    @media ${device.laptop} {
      width:80%;
    }
`;

export const PostBanner = styled.div`
    background-image: url(${PostBannerImage});
    background-size: cover;
    background-position:center;
    width:100%;
    display:flex;
    justify-content: center;
`;

export const PostBannerNotFound = styled.div`
    background-image: url(${PostBannerImage});
    background-size: cover;
    background-position:center;
    width:100%;
    display:flex;
    justify-content: center;
    height:80vh;
`;

export const PostBannerContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    padding:48px;
    width: 100%;
    margin: auto;
`;

export const DescriptionContainer = styled.div`
`;

export const ContentContainer = styled.div`
`;

export const ObservationsContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:16px;
    color: #5E6879;
`;

export const PostTitle = styled.h1`
    margin:unset;
    color:#FCC918;
    font-size:64px;
    font-weight:600;
`;

export const PostSubtitle = styled.h2`
    font-size:32px;
    font-weight:900;
    color:#1E4071;
`;

export const PostText = styled.p`
    font-size:18px;
    color:#000000;

    &.description{
        color:#08244B
    }
`;

export const PostInfo = styled.span`
    margin:unset;
    color:#F6F6F6;
    font-size:16px;
    font-weight:600;
`;

export const ObservationText = styled.span`
    font-size:16px;
    font-weight: 400;
`;


const AdminPostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/admin/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const updatePost = async (updatedPost: Post) => {
    try {
      await api.put(`/admin/posts/${updatedPost._id}`, updatedPost);
      console.log('Post updated');
      setEditingPost(null);
      setPost(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async () => {
    try {
      await api.delete(`/admin/posts/${id}`);
      console.log('Post deleted');
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEditPost = () => {
    if (post) {
      setEditingPost(post);
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <ReadPostContainer>
      <Header />
      <PostBanner>
        <PostBannerContent className="content-container">
          <PostTitle>{post.title}</PostTitle>
          <PostInfo>Atualizado em: {new Date(post.modifyDate).toLocaleDateString()}</PostInfo>
        </PostBannerContent>
      </PostBanner>
      <ReadPostContent className="content-container">
        <DescriptionContainer>
          <PostSubtitle>
            Descrição
          </PostSubtitle>
          <PostText className="description">
            {post.description}
          </PostText>
        </DescriptionContainer>
        <ContentContainer>
          <PostSubtitle>
            Conteúdo
          </PostSubtitle>
          <PostText>
            {post.content}
          </PostText>
        </ContentContainer>
        <ObservationsContainer>
          <ObservationText>
            <b>Autor:</b> {post.author}
          </ObservationText>
        </ObservationsContainer>

        <FormSeparator />

        {editingPost ? (
          <UpdatePostForm post={editingPost} onUpdate={updatePost} onCancel={handleCancelEdit} />
        ) : (
          <FormFooter>
            <PrimaryButton onClick={deletePost}>
              <FontAwesomeIcon icon={faTrash} />
              Apagar
            </PrimaryButton>
            <SecondaryButton onClick={handleEditPost}>
              <FontAwesomeIcon icon={faPencil} />
              Editar
            </SecondaryButton>
          </FormFooter>
        )}

      </ReadPostContent>



      <Footer />
    </ReadPostContainer>
  );
};

export default AdminPostDetailPage;
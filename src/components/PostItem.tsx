import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import CoverImage from "../assets/generic-post-card-image.png";

import styled from "styled-components";

export const PostCard = styled.div`
    width: 200px;
    height:200px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #08244B;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const PostCardImage = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
`;

export const PostCardContent = styled.div`
    background-color: #08244B;
    padding:8px 16px;
    height:80px;
`;

export const PostCardTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #FCC918;
    margin: 0 0 8px;
    display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const PostCardSubjects = styled.p`
    font-size: 12px;
    color: #FFE690;
    font-weight:500;
`;


interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [user] = useAuthState(auth);

  // Always redirect to the public route
  const postLink = user ? `/admin/posts/${post._id}` : `/post/${post._id}`;

  const navigate = useNavigate();

  const goToPost = () =>{
    navigate(postLink);
  }

  return (
    <PostCard id={post._id} onClick={goToPost}>
      <PostCardImage src={CoverImage} alt={post.title} className="post-card-image" />
      <PostCardContent>
        <PostCardTitle className="post-card-title">{post.title}</PostCardTitle>
        <PostCardSubjects>{post.author}</PostCardSubjects>
      </PostCardContent>
    </PostCard>
  );
};

export default PostItem;
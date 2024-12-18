import React from 'react';
import PostItem from './PostItem';
import { Post } from '../types/Post';
import styled from 'styled-components';
import { device } from "../layoutBreakpoints";

export const PostListContainer = styled.div`
    align-self:center;
    width:100%;
    margin-bottom:32px;
    display:flex;
    column-gap:20px;
    row-gap:16px;
    flex-wrap:wrap;
    @media ${device.laptop} {
      width: 80%;
      justify-content: space-around;
    }
    @media ${device.tablet} {
      align-self:center;
      width: 70%;
    }
`

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <PostListContainer className="content-container">
      {posts.map((post) => (
        <div key={post._id}>
          <PostItem post={post} />
        </div>
      ))}
    </PostListContainer>
  );
};

export default PostList;
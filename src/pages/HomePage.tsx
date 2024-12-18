import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import axios from 'axios';
import styled from 'styled-components';

import {
  HomePageContainer,
  BannerContainer,
  BannerContent,
  PostListTitleContainer,
  PostListTitle
} from "./PageStyledComponents";
import Header from '../components/Header';
import Footer from '../components/Footer';


const SearchInput = styled.input`
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

const HomePage: React.FC = () => {
  interface Post {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    modifyDate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then(response => {
      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    }).catch(error => {
      console.error('Error fetching posts:', error);
    });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    axios.get(`http://localhost:3000/posts/search?q=${term}`).then(response => {
      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    }).catch(error => {
      console.error('Error searching posts:', error);
    });
  };

  return (
    <HomePageContainer>
      <Header />
      <BannerContainer>
        <BannerContent className="content-container">
          <h1>
            Encontre aqui o que você precisa para <br />
            <b>
              saber mais
            </b>
            de todas as matérias
          </h1>
          <SearchInput
            type="text"
            placeholder="O que você quer saber?"
            value={searchTerm}
            onChange={handleSearch}
          />
        </BannerContent>
      </BannerContainer>

      <PostListTitleContainer className="content-container">
        <PostListTitle>
          Posts disponíveis
        </PostListTitle>
      </PostListTitleContainer>

      <PostList posts={posts} />
      <Footer/>
    </HomePageContainer>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerHome from '../assets/banner-home.png';
import { device } from "../layoutBreakpoints";

export const HomePageContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;


export const BannerContainer = styled.div`
    background-color:#808A96;
    height:600px;
    display:flex;
    justify-content:center;
    background-image: url(${BannerHome});
    background-size: cover;
    background-position:center;
    h1{
        font-size:54px;
        color:#FFFFFF;
        b{
            font-size:94px;
            color:#FCC918;
            margin-right:8px;
        }
    }
    @media ${device.tablet} {
      h1{
        font-size:48px;
        color:#FFFFFF;
        b{
            font-size:54px;
            color:#FCC918;
            margin-right:8px;
        }
    }
    }
`;

export const BannerContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @media ${device.laptop} {
      width: 80%;
    }
`;

export const PostListTitleContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    align-self:center;
    width:100%;

    @media ${device.laptop} {
      justify-content:center;
    }
`;

export const PostListTitle = styled.h1`
    font-family:'Maven Pro', sans-serif;
    color:#1E4071;
    font-size:32px;
    font-weight:700;
    @media ${device.laptop} {
      width: 80%;
      text-align:center;
    }
`;

export const PostListButtonGroup = styled.div`
    width:96px;
    display:flex;
    gap:16px;
`;

export const PostListButton = styled.button`
    background-color:#FCC918;
    color:#1E4071;
    height:32px;
    width:32px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        border:1px solid #FCC918;
        background-color: #08244B;
        color:#FCC918;
    }

    &.active{
        border:1px solid #1E4071;
        background-color: #1E4071;
        color:#FCC918;
        &:hover{
            border:1px solid #FCC918;
            background-color: #08244B;
            color:#FCC918;
        }
    }
`;


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
import styled from "styled-components";
import BannerHome from '../assets/banner-home.png';

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
`;

export const BannerContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
`;

export const PostListTitleContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    align-self:center;
    width:100%;
`;

export const PostListTitle = styled.h1`
    font-family:'Maven Pro', sans-serif;
    color:#1E4071;
    font-size:32px;
    font-weight:700;
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
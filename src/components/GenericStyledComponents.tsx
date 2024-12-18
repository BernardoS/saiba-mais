import styled from "styled-components";
import { device } from "../layoutBreakpoints";

export const PrimaryButton = styled.button`
    background-color:#FCC918;
    color:#08244B;
    border:2px solid #08244B;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-family:'Maven Pro', sans-serif;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    font-size:16px;
    transition:0.3s;
    cursor:pointer;

    &:hover{
        background-color:#fcc505;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
         transform: scale(1.05);
    }

    &.login-page{
        min-width:200px;
        @media ${device.mobile} {
            width:100%;
        }
    }
`;
export const SecondaryButton = styled.button`
    background-color:#08244B;
    color:#FCC918;
    border:2px solid #FCC918;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    height:48px;
    font-family:'Maven Pro', sans-serif;
    font-weight:700;
    border-radius:10px;
    padding:8px 16px;
    font-size:16px;
    transition:0.3s;
    cursor:pointer;

    &:hover{
        background-color:#041730;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
         transform: scale(1.05);
    }
    
    &.login-page{
        min-width:200px;

        @media ${device.mobile} {
            width:100%;
        }
    }
`;
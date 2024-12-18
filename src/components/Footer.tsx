import SaibaMaisLogo from "../assets/logo-footer-menu.png";
import styled from "styled-components";
import { device } from "../layoutBreakpoints";

export const FooterContainer = styled.div`
    background-color:#1E4071;
    border-top:2px solid #FCC918;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const FooterContent = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-self:center;
    padding:24px;
`;
export const FooterLogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:33%;
`;

export const FooterInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media ${device.mobile} {
      flex-direction:column;
      align-items:center;
      width:100%;
      gap:24px;
    }
`;

export const FooterInfoTitle = styled.h4`
    font-size:14px;
    font-weight:600;
    color:#FCC918;
    margin-bottom:8px;
`;

export const FooterInfoList = styled.ul`
    list-style:none;
    padding:unset;
    margin:unset;
`;

export const FooterInfoItem = styled.li`
    font-size:12px;
    font-weight:600;
    color:#FFFFFF;
`;

export const FooterInfoRight = styled.div`
    text-align:right;
    width:33%;
    @media ${device.mobile} {
      text-align:center;
      width:100%;
    }
`;

export const FooterInfoLeft = styled.div`
    text-align:left;
    width:33%;
    @media ${device.mobile} {
      text-align:center;
      width:100%;
    }
`;

const Footer = () =>{

    return( 
    <FooterContainer>
        <FooterContent className="content-container">
            
            <FooterInfoContainer>
                <FooterInfoLeft>
                    <FooterInfoTitle>Site desenvolvido por:</FooterInfoTitle>
                    <FooterInfoList>
                        <FooterInfoItem>Bernardo Souza</FooterInfoItem>
                        <FooterInfoItem>Guilherme Marin</FooterInfoItem>
                        <FooterInfoItem>Igor Santana</FooterInfoItem>
                        <FooterInfoItem>Anderson Oliveira</FooterInfoItem>
                    </FooterInfoList>
                </FooterInfoLeft>

                <FooterLogoContainer> <img src={SaibaMaisLogo}/></FooterLogoContainer>
            
                <FooterInfoRight>
                    <FooterInfoTitle>Site desenvolvido por:</FooterInfoTitle>
                    <FooterInfoList>
                        <FooterInfoItem>PósTech FIAP em Fullstack Development</FooterInfoItem>
                    </FooterInfoList>
                </FooterInfoRight>
            </FooterInfoContainer>

        </FooterContent>
        
    </FooterContainer>
    );
}

export default Footer;
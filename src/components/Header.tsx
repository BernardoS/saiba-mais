

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserGear} from '@fortawesome/free-solid-svg-icons';
import { signOut, getAuth } from 'firebase/auth';
import SaibaMaisLogo from "../assets/logo-header-menu.png";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "./GenericStyledComponents";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

export const HeaderContainer = styled.div`
    display:flex;
    background-color:#1E4071;
    align-items:center;
    justify-content:center;
    width:100%;
    height:96px;
    border-bottom:2px solid #FCC918;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LoginButon = styled.button`
    width: 240px;
    height:50px;
    border-radius:10px;
    border:2px solid #FCC918;
    background-color: #08244B;
    transition:0.3s;
    color:#FCC918;
    display:flex;
    gap:8px;
    padding:12px 8px;
    align-items:center;
    justify-content:center;
    font-weight: 700;
    font-size:20px;
    font-family: "Maven Pro", sans-serif;
    cursor:pointer;
    &:hover{
        background-color:transparent;
    }
`;

export const HomeButton = styled.button`
    height:32px;
    background-color:transparent;
    border:none;
    cursor:pointer;
`;

export const HeaderButtonGroup = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
`

const Header = () =>{

    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }

    const navigateLogin= () => {
        navigate("/login");
    }

    const navigateAdmin= () => {
        navigate("/admin");
    }

    const { isLoggedIn, toggleLogin } = useAuth();


    const logOut = async() =>{
        const auth = getAuth();
        await signOut(auth);
        toggleLogin();
    }

    return( 
    <HeaderContainer>
        <HeaderContent className="content-container">
            <HomeButton type="button" onClick={navigateHome} >
                <img src={SaibaMaisLogo}></img>
            </HomeButton>
            <HeaderButtonGroup>
                <SecondaryButton type="button" onClick={isLoggedIn ? navigateAdmin : navigateLogin}>
                    <FontAwesomeIcon icon={faUserGear} />
                    Área do professor 
                </SecondaryButton>
                {isLoggedIn
                    && (
                    <SecondaryButton type="button" onClick={logOut}>
                        <FontAwesomeIcon icon={faSignOut}/>
                        Sair
                    </SecondaryButton>
                )}
            </HeaderButtonGroup>
            
        </HeaderContent>  
    </HeaderContainer>
    );
}

export default Header;
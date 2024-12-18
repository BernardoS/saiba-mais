import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Link to="/">
        <Logo>
          <LogoImage src="src/assets/saiba-mais-logo.svg" alt="Logo" />
          <Title>Saiba mais</Title>
        </Logo>
      </Link>
      <Link to="/login">
        <Button>Área do Professor</Button>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
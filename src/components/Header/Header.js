import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #4a90e2;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  margin: 0;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif; // Exemplo de fonte personalizada
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={'/family.jpeg'} alt="Logo" />
      <Title>Rodrigo Rodrigues dos Santos Guilherme</Title>
    </StyledHeader>
  );
};

export default Header;
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Styled componente para o footer
const StyledFooter = styled.footer`
  background-color: #333; // Cor de fundo do footer para destaque
  color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled componente para os ícones das redes sociais
const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

// Styled componente para os links dos ícones
const IconLink = styled.a`
  color: #ffffff; // Cor dos ícones
  margin: 0 10px; // Espaçamento entre os ícones
  font-size: 24px; // Tamanho dos ícones

  &:hover {
    color: #d1e9ff; // Cor mais clara ao passar o mouse
  }
`;

const SocialMedia = () => {
  return (
    <StyledFooter>
      <SocialMediaIcons>
        <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </IconLink>
        <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </IconLink>
      </SocialMediaIcons>
    </StyledFooter>
  );
};

export default SocialMedia;
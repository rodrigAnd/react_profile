import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #333; // Cor de fundo do footer para destaque
  color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

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
        <IconLink href="https://www.facebook.com/fernandapersan" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </IconLink>
        <IconLink href="https://www.instagram.com/nandarodrigo_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/rodrigo-guilherme-002391131/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </IconLink>
      </SocialMediaIcons>
    </StyledFooter>
  );
};

export default SocialMedia;
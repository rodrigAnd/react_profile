import React from 'react';
import styled from 'styled-components';

// Definindo componentes estilizados
const InterestsContainer = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const InterestsTitle = styled.h2`
  color: #4a90e2;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const InterestsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const InterestItemStyled = styled.li`
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  img {
    width: 100px; // Adapte este valor conforme necessário
    height: auto;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 18px;
    color: #333;
    margin-top: 0;
  }
`;

const InterestItem = ({ title, imageUrl, link }) => {
  return (
    <InterestItemStyled onClick={() => window.open(link, "_blank")}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </InterestItemStyled>
  );
};

const InterestMeSection = () => {
  // Defina a lista de interesses e seus links aqui
  const interests = [
    {
      title: "Olhar Digital",
      imageUrl: "/olharDigital.png",
      link: "https://olhardigital.com.br/",
    },
    {
      title: "Desenvolvimento Android",
      imageUrl: "/android.png",
      link: "https://developer.android.com/?hl=pt-br",
    },
    
  ];

  return (
    <InterestsContainer>
      <InterestsTitle>Áreas de Interesse</InterestsTitle>
      <InterestsList>
        {interests.map((interest, index) => (
          <InterestItem
            key={index}
            title={interest.title} // Incluí 'title' como uma propriedade válida para 'interest'
            imageUrl={interest.imageUrl}
            link={interest.link}
          />
        ))}
      </InterestsList>
    </InterestsContainer>
  );
};

export default InterestMeSection;
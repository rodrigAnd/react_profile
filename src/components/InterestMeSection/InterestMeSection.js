import React from 'react';
import styled from 'styled-components';

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); // Adjust the minmax for item width as needed
  gap: 20px; // Adjust gap size as desired
`;

const InterestItemStyled = styled.li`
  margin-bottom: 15px;
  cursor: pointer;
  text-align: center; // Center the content for each grid item
  &:hover {
    opacity: 0.7;
  }
  img {
    width: 100%; // Images will fill the item width
    height: auto;
    display: block;
    margin-bottom: 10px;
    margin-left: auto; // Center the image horizontally
    margin-right: auto;
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
  const interests = [
    {
      imageUrl: "/olharDigital.png",
      link: "https://olhardigital.com.br/",
    },
    {
      imageUrl: "/android.png",
      link: "https://developer.android.com/?hl=pt-br",
    },

    {
        imageUrl: "/ios.png",
        link: "https://www.apple.com/",
      },

      {
        imageUrl: "/aws.png",
        link: "https://aws.amazon.com/pt/",
      },

      {
        imageUrl: "/kotlin.png",
        link: "https://kotlinlang.org/",
      },
    
  ];

  return (
    <InterestsContainer>
      <InterestsTitle>Áreas de Interesse</InterestsTitle>
      <InterestsList>
        {interests.map((interest, index) => (
          <InterestItem
            key={index}
            title={interest.title}
            imageUrl={interest.imageUrl}
            link={interest.link}
          />
        ))}
      </InterestsList>
    </InterestsContainer>
  );
};

export default InterestMeSection;
import React from 'react';
import styled from 'styled-components';

const skills = [
  'Kotlin',
  'Android SDK',
  'Rest Api/ Retrofit',
  'Persistência de dados com Room',
  'Coroutines / Kotlin Flow',
  'Injeção de dependência (Koin, Hilt)',
  'Custom Views',
  'Modularizacão',
  'Testes unitários',
  'Arquiteturas (MVVM/Clean)',
  'Solid',
  'Git/ GitHub',
  'Push Notification',
  'Acessibilidade'
];

// Definindo componentes estilizados
const ProfileContainer = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #4a90e2;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-top: 10px;
`;

const SkillsSection = styled.div`
  margin-top: 20px;
`;

const SkillsTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  background-color: #f5f5f5;
  margin: 5px 0;
  padding: 8px 16px;
  border-radius: 4px;
`;

const ProfileSection = () => {
  return (
    <ProfileContainer>
      <Title>Minha Jornada Profissional</Title>
      <InfoText>
        Atuo com desenvolvimento Android há 3 anos, sou comunicativo, procuro sempre apoiar no processo de descoberta e desenvolvimento para entregar o melhor produto aos usuários.
        Ao longo da minha jornada tive contato com tecnologias utilizadas para desenvolvimento de apps Android.
        Minhas experiências são:
      </InfoText>

      <SkillsSection>
        <SkillsTitle>Competências Técnicas</SkillsTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillsSection>

      <InfoText>
        Conhecimentos extras: CI/CD, SDK Salesforce Android, Agile, Teste com Expresso, Google Analytics, Confluence, Jira, etc.
      </InfoText>

      <InfoText>
        Anteriormente trabalhei com suporte técnico focado em automação comercial. Durante 17 anos atuei no processo de implantação de projetos como NF-e 4.0, Cupom fiscal Sat, Sistema Nacional de produtos controlados (SNGPC), homologação de aplicação junto a órgãos governamentais responsáveis, treinamento de equipes para utilização de software.
      </InfoText>
    </ProfileContainer>
  );
};

export default ProfileSection;
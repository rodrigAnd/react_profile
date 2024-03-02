import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px; // Borda ligeiramente mais arredondada
  margin-top: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); // Sombra mais suave e mais espaçada
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; // Uma fonte mais limpa
`;

const Title = styled.h2`
  color: #4a90e2; // Cor seguindo padrao do Header
  font-size: 28px; // Tamanho ligeiramente maior para um maior destaque
  font-weight: 800; // Fonte mais pesada para mais presença
  margin-bottom: 24px; // Espaçamento maior para separar do texto abaixo
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #4A4A4A; // Cor mais escura para melhor legibilidade
  line-height: 1.6;
  margin-top: 16px; // Um pouco mais de espaço no topo
`;

const SkillsSection = styled.div`
  background-color: #f8f9fa; // Fundo claro para destacar a seção
  padding: 20px;
  margin-top: 24px;
  border-radius: 8px; // Borda arredondada para a subseção
`;

const SkillsTitle = styled.h3`
  font-size: 22px;
  font-weight: 700; // Peso da fonte um pouco maior que o título principal
  color: #27364A; // Correspondência de cores com o título principal
  margin-bottom: 16px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #e2e8f0; // Borda para separar cada item
  margin: 8px 0;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04); // Sombra sutil para os itens da lista
`;

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
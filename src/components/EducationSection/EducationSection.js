import React from 'react';
import styled from 'styled-components';

const CertificationContainer = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CertificationTitle = styled.h2`
  color: #4a90e2;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CertificationItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CertificationThumbnail = styled.img`
  flex-shrink: 0;
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 4px;
`;

const CertificationContent = styled.div`
  flex-grow: 1;
`;

const CertificationName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const certification = [
  {
    name: "Desenvolvimento Android com Kotlin",
    organization: "Impacta",
    link: "https://www.linkedin.com/school/impactaoficial/",
    imageUrl: "/impacta.png"
  },
  {
    name: "Java Programmer",
    organization: "Impacta",
    link: "https://www.linkedin.com/school/impactaoficial/",
    imageUrl: "/impacta.png"
  },
  {
    name: "Int. a Lógica de programação",
    organization: "Impacta",
    link: "https://www.linkedin.com/school/impactaoficial/",
    imageUrl: "/impacta.png"
  },
  {
    name: "ViewModel e Lifecycle para melhor experiência em aplicativos Android",
    organization: "DIO",
    link: "https://www.dio.me/certificate/047306D0/share",
    imageUrl: "/dio.jpeg"
  },
  {
    name: "API REST com Kotlin e Spring Boot: Camada Web",
    organization: "Alura",
    link: "https://cursos.alura.com.br/certificate/1e41bdaf-71dc-416b-9888-dd04ece33c95/",
    imageUrl: "/alura.png"
  },
  {
    name: "Desenvolvimento Android: Arquitectura MVP (Kotlin)",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-231263bc-ba52-42d3-8508-59205b487eac/",
    imageUrl: "/udemy.png"
  }
];

const EducationSection = () => {
  return (
    <CertificationContainer>
      <CertificationTitle>Certificações</CertificationTitle>
      <CertificationsList>
        {certification.map((cert, index) => (
          <CertificationItem
            key={index}
            onClick={() => window.open(cert.link, '_blank')}
          >
            {cert.imageUrl && (
              <CertificationThumbnail
                src={cert.imageUrl}
                alt={`Certificado de ${cert.name}`}
              />
            )}
            <CertificationContent>
              <CertificationName>{cert.name}</CertificationName>
              <div>{cert.organization}</div>
            </CertificationContent>
          </CertificationItem>
        ))}
      </CertificationsList>
    </CertificationContainer>
  );
};

export default EducationSection;
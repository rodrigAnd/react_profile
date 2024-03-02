import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileSection from './components/ProfileSection/ProfileSection';
import EducationSection from './components/EducationSection/EducationSection';
import InterestMeSection from './components/InterestMeSection/InterestMeSection';
import { createGlobalStyle } from 'styled-components';
import SocialMedia from './components/SocialMedia/SocialMedia';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  return (
    <div className="App">
    <Header />
    <GlobalStyle />
    <main>
        <ProfileSection title="Perfil Profissional" />
        <EducationSection  />
        <InterestMeSection />
        <SocialMedia />
    </main>
</div>

  );
};

export default App;
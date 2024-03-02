import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileSection from './components/ProfileSection/ProfileSection';
import EducationSection from './components/EducationSection/EducationSection';
import InterestMeSection from './components/InterestMeSection/InterestMeSection';

const App = () => {
    const educationList = ["Bacharelado em Sistemas de Informação - FIAP", "Curso de Inglês - Escola XYZ"];

    return (
        <div className="App">
            <Header />
            <main>
                <ProfileSection title="Perfil Profissional" />
                <EducationSection  />
                <InterestMeSection />
            </main>
        </div>
    );
};

export default App;
import React from 'react';
import Promo from './Promo/Promo';
import NavBar from './NavBar/NavBar';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main({ isLogged }) {
  return (
    <div>
      <Header isLogged={isLogged} isMain={true} />
      <Promo />
      <NavBar />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;

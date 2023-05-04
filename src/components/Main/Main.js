import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';

function Main() {
  return (
    <>
      <Header />

      <div className="content">
        <Promo />

        <AboutProject />

        <Techs />

        <AboutMe />
      </div>

      <Footer />
    </>
  );
}

export default Main;

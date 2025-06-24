import React from 'react';
import './ArohaPage.css'; 
import ReactCountryFlag from "react-country-flag";

import unionLogo from '../assets/images/union.jpg';
import headerLogo from '../assets/images/logo-header.jpg';
import heroBackground from '../assets/images/Sin título.jpg';
import arohaKoruLogo from '../assets/images/Logo-Koru-Maria-3.png';
import back4Countries from '../assets/images/back-4-countries.jpg';
import mariscoLogo from '../assets/images/marisco-logo-new.png';
import kingsalmonLogo from '../assets/images/kingsalmon-logo.jpg';
import boviLogo from '../assets/images/bovi-logo.jpg';
import graccizaLogo from '../assets/images/gracciza-logo.jpg';
import oohAlpargatas from '../assets/images/ooh-alpargatas.jpg';
import selmarkLingerie from '../assets/images/selmark-lingerie.jpg';
import selmarkCare from '../assets/images/selmark-care.jpg';
import salmonCover from '../assets/images/salmon-cover.png';
import bedCover from '../assets/images/bed-cover - copia.png';
import wineCover from '../assets/images/wine-cover.png';
import bathCover from '../assets/images/bath-cover.png';
import selmarkBrideCover from '../assets/images/selmarkbride-cover.png';
import alpargatasCover from '../assets/images/alpargatas-cover.png';
import selmarkCareCover from '../assets/images/selmark-care-cover.png';
import HamburgerMenu from './hamburgerMenu';


const Home = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={unionLogo} alt="Logo de Union Europea" />
        </div>

        <nav>
          <a href="#">PRODUCTOS</a>
          <a href="#">ACERCA DE</a>
          <a href="#">CONTACTO</a>
          <a href="#">MEDIA</a>
          <a href="#">PUNTOS DE VENTA</a>
          <a href="#">
            <ReactCountryFlag countryCode="ES" svg style={{ width: '24px', height: '24px' }} />
          </a>
          <a href="#">
            <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '24px' }} />
          </a>
        </nav>

        <div className="logo2">
          <img src={headerLogo} alt="logo ahora iberica" />
        </div>

        <button className="menu-toggle" aria-label="Abrir menú">
          <HamburgerMenu />
        </button>
      </header>

      <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="cuadro-negro">
          <h1 className="titulo-principal">
            <span className="a-roja">A</span>ROH<span className="a-roja">A</span> IBERIC<span className="a-roja">A</span>
          </h1>
          <p className="subtitulo">Construyendo un puente entre las antípodas</p>
          <img className="logo-centro" src={arohaKoruLogo} alt="Logo Aroha Ibérica" />
          <p className="texto-inferior">
            Acercando a aquellos que fabrican productos de calidad a quienes los aprecian
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="info-container">
          <div className="single-image">
            <img src={back4Countries} alt="Imagen ilustrativa" />
          </div>

          <div className="text-content">
            <h2 className="section-title">POR QUÉ NOSOTROS?</h2>
            <p>Importación y exportación de productos de alto standing y de productos especializados.</p>

            <p><strong>País de origen</strong></p>
            <p><strong>Hecho en: España | Portugal | Australia | Nueva Zelanda</strong></p>

            <p><strong>Calidad, Estilo y Funcionalidad.</strong></p>
            <p><strong>Seleccionando y trabajando con los mejores fabricantes de cada sector y mercado.</strong></p>
          </div>
        </div>
        <p className="texto-final">Abrimos puertas al otro lado del mundo, a donde nunca antes pensaste que sería posible llegar</p>
      </section>

      <section className="partners-section">
        <div className="partners-header">
          <h2 className="partners-title">PARTNERS</h2>
          <div className="line"></div>
        </div>

        <div className="partners-logos">
          <img src={mariscoLogo} alt="Partner 1" />
          <img src={kingsalmonLogo} alt="Partner 2" />
          <img src={boviLogo} alt="Partner 3" />
          <img src={graccizaLogo} alt="Partner 4" />
          <img src={oohAlpargatas} alt="Partner 5" />
          <img src={selmarkLingerie} alt="Partner 6" />
          <img src={selmarkCare} alt="Partner 6" />
        </div>
      </section>

      <section className="products-section">
        <div className="products-header">
          <h2 className="products-title">NUESTROS PRODUCTOS</h2>
          <div className="line"></div>
        </div>

        <div className="product-cards">
          <div className="product-card">
            <img src={salmonCover} alt="King Salmon" />
            <p>KING SALMON DE NUEVA ZELANDA</p>
          </div>

          <div className="product-card">
            <img src={bedCover} alt="Ropa de cama" />
            <p>ROPA DE CAMA PORTUGUESA DE LUJO </p>
          </div>

          <div className="product-card">
            <img src={wineCover} alt="Vino" />
            <p>GALARDONADO VINO DE NUEVA ZELANDA</p>
          </div>

          <div className="product-card">
            <img src={bathCover} alt="Ropa de baño" />
            <p>ROPA DE BAÑO PORTUGUESA DE LUJO</p>
          </div>

          <div className="product-card">
            <img src={selmarkBrideCover} alt="Selmark novias" />
            <p>LENCERIA DE SELMARK NOVIAS DESDE ESPAÑA CON AMOR</p>
          </div>

          <div className="product-card">
            <img src={alpargatasCover} alt="Alpargatas" />
            <p>OHH ALPARGATAS DESDE ESPAÑA CON AMOR</p>
          </div>

          <div className="product-card">
            <img src={selmarkCareCover} alt="Selmark care" />
            <p>LENCERIA SELMARK CARE DESDE ESPAÑA CON AMOR</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <img src={unionLogo} alt="Unión Europea" />
        </div>
        <div className="footer-bottom">
          <p>© 2019 Aroha Ibérica. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

import React from "react";
import { connect, styled, css } from "frontity";
import Logo from "../assets/logotipo.png";
import Link from "../components/Link";
import Appstore from "../assets/appstore.jpg";
import RssFeed from "../assets/feed.jpg";
import Pressreader from "../assets/pressreader.jpg";
import Comscore from "../assets/comscore-logo.jpg";

const Footer = () => {
  return (
    <>
      <FooterBar>
        <FooterContainer>
          <Identity>
            <img src={Logo} alt="24 Horas - El Diario Sin Limites" />
            <Link href="https://24horaspuebla.com/" target="_blank">
              PUEBLA
            </Link>
            <Link href="">QUINTANA ROO</Link>
          </Identity>
          <Sitemap>
            <Link href="">CONTACTO</Link>
            <Link href="">PUBLICIDAD</Link>
            <Link href="">DIRECTORIO</Link>
            <Link href="">CÓDIGO DE PRÁCTICAS</Link>
            <Link href="">AVISO DE PRIVACIDAD</Link>
            <Link href="">MANUAL DE REDES SOCIALES</Link>
          </Sitemap>
          <ImagesFooter>
            <img src={Appstore} alt="24 Horas en Appstore" />
            <img src={RssFeed} alt="RSS FEED" />
            <img src={Pressreader} alt="Pressreader" />
            <img src={Comscore} alt="Comscore" />
          </ImagesFooter>
        </FooterContainer>
      </FooterBar>
    </>
  );
};

export default connect(Footer);

// Estilo para la navegación
const FooterBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: radial-gradient(at center center, #cf3736 0%, #bb3033 100%);
  padding: 50px 0;
  & a {
    color: #fff;
    margin-bottom: 10px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 90%;
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: space-around;
    width: 100%; 
  }
`;

const Identity = styled.div`
  & img {
    width: 200px;
    margin-bottom: 20px;
  }
  & a {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid;
    width: max-content;
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    & img {
      width: 250px;
    }
  }
`;

const Sitemap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 767px){
    margin-bottom: 20px;
  }
`;

const ImagesFooter = styled.div`
  & img {
    width: 90px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    & img {
      width: 120px;
      margin-bottom: 15px;
    }
  }
`;

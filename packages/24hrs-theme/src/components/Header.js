import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import Logo from "../assets/logotipo.png";
import Toogle from "../components/Toogle";
import MenuButton from "../components/MenuButton";

const Header = () => {
  return (
    <>
      <NavigationBar>
        <NavigationBarContentTop>
          <Link href="/">
            <img src={Logo} alt="24 Horas - El Diario Sin Límites" />
          </Link>
        </NavigationBarContentTop>
        <NavigationBarContentBottom>
          <NavLinks>
            <Link href="/category/mundo/">Videos</Link>
            <Link href="/opinion">Opinión</Link>
            <Link href="/impreso-pdf">Impreso</Link>
            <Link href="/24-horas-en-tu-whatsapp">Recíbelo Diario</Link>
          </NavLinks>
          <MenuButton />
          <Toogle />
        </NavigationBarContentBottom>
      </NavigationBar>
    </>
  );
};

export default connect(Header);

// Estilo para la navegación
const NavigationBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(at center center, #cc0000 0%, #bb3033 70%);
  padding: 10px 0;
`;

// Estilo para el logo
const NavigationBarContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & img {
    max-width: 250px;
  }
`;

// Estilo para menú
const NavigationBarContentBottom = styled.div`
  display: flex;
  align-items: center;
  & a {
    font-size: 14px;
    padding-left: 24px;
    color: #fff;
  }
`;

const NavLinks = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

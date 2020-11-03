import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../Link';

const MenuModal = ({ actions, state }) => {
  const { isMobileMenuOpen } = state.theme;

  if (isMobileMenuOpen == true) {
    return (
      <>
        <MenuContainer>
          <button onClick={actions.theme.closeMobileMenu}>X</button>
          <NavLinks>
            <Link href="/video">Video</Link>
            <Link href="/opinion">Opinión</Link>
            <Link href="/impreso-pdf">Impreso</Link>
            <Link href="/24-horas-en-tu-whatsapp">Recíbelo Diario</Link>
          </NavLinks>
        </MenuContainer>
      </>
    );
  } else {
    return null;
  }
};

const MenuContainer = styled.div`
  background-color: #4a4a4a;
  color: #fff;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
`;

const NavLinks = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default connect(MenuModal);

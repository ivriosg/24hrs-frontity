import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Base from "./styles/Base";
import Header from "./components/Header";
import Destacadas from "./components/Destacadas";
import Footer from "./components/Footer";

// Componentes Home
import Principal from "./components/Principal";
import Principales from "./components/Principales";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Base />
      <Header />
      <MainSection>
        <EightBlock>
          <Principal />
          <Principales />
        </EightBlock>
        <FourBlock>
          <span>Destacadas de hoy</span>
          <Destacadas />
        </FourBlock>
      </MainSection>

      <Footer />
    </>
  );
};

export default connect(Root);

const MainSection = styled.div`
  paddding: 30px 0;
  display: flex;
`;
const EightBlock = styled.div`
  border: 1px solid #000;
  width: 66.666%;
`;
const FourBlock = styled.div`
  border: 1px solid red;
  width: 33.333%;
`;

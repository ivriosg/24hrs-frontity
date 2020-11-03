import React from "react";
import { connect, styled } from "frontity";

// Componentes Home
import Principal from "../components/Principal";
import Principales from "../components/Principales";
import Destacadas from "../components/Destacadas";
import ImgLeft from "../components/ImgLeft";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <ContainerBox>
        <MainSection>
          <EightBlock>
            <Principal className="principal" />
            <Principales />
            <ImgLeft />
          </EightBlock>

          <FourBlock>
            <div className="title-section">
              <span>Destacadas de hoy</span>
            </div>
            <Destacadas />
          </FourBlock>
        </MainSection>
      </ContainerBox>
    </>
  );
};

export default connect(Root);

const MainSection = styled.div`
  paddding: 30px 0;
  display: flex;
`;
const EightBlock = styled.div`
  width: 66.666%;
  margin-right: 20px;
`;
const FourBlock = styled.div`
  width: 33.333%;
`;
const ContainerBox = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

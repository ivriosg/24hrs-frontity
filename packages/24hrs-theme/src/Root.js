import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Base from "./styles/Base";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Post from "./components/Post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Base />
      <Header />
      <ContainerBox>
        {data.isHome && <Home />}
        {data.isPost && <Post />}
      </ContainerBox>
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
  width: 66.666%;
  margin-right: 20px;
`;
const FourBlock = styled.div`
  width: 33.333%;
`;
const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

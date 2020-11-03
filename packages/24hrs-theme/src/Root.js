import React from "react";
import { connect, styled } from "frontity";
import Base from "./styles/Base";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
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
        {data.isAuthor && <Author />}
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

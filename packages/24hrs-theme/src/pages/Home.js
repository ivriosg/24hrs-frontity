import React from "react";
import { connect } from "frontity";
import Link from "../components/Link";

const Home = ({ state }) => {
  const pageHero = state.source.page[210];
  const pildoras = state.source.pildora;

  return (
    <>
      <h1>Estamos en el Home</h1>
    </>
  );
};

export default connect(Home);

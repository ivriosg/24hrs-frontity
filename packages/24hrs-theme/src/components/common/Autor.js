import React from "react";
import { connect, styled, css } from "frontity";
import Link from "../Link";

const Autor = ({ state, aut_id }) => {
  const author = state.source.author[aut_id];

  return (
    <>
      <Link href={author.link}>
        <span>{author.name}</span>
      </Link>
    </>
  );
};
export default connect(Autor);

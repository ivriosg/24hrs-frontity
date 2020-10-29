import React from "react";
import { connect } from "frontity";

const Post = ({ state, element, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  // Obtenemos los datos de la página
  const Html2react = libraries.html2react.Component;

  return (
    <>
      <Html2react html={post.content.rendered} />
    </>
  );
};

export default connect(Post);

import React from "react";
import { connect, styled, css } from "frontity";
import Screenshot from "../assets/screenshot.jpg";

const Featured = ({ state, img_id }) => {
  const media = state.source.attachment[img_id];

  return (
    <>
      {typeof media == "undefined" ? (
        <img src={Screenshot} alt="Imagen por defecto" />
      ) : (
        <img
          src={media.media_details.sizes.medium_large.source_url}
          alt={media.alt_text}
        />
      )}
    </>
  );
};

export default connect(Featured);
import React from "react";
import { connect, Global, css } from "frontity";
import Title from "../assets/fonts/title-post.ttf";

const Base = ({ state }) => {
  // Almacenamos variable para verificar si esta activado el Dark Mode
  const { isDarkModeOn } = state.theme;

  /* Definiendo variables para CSS */
  const mainBlack =  "#131313";
  const mainRed = "#f2322b";

  return (
    <Global
      styles={css`
        html {
          font-family: sans-serif;
        }
        body {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 0;
          background-color: ${isDarkModeOn == true ? mainBlack : "white"};
          color: ${isDarkModeOn == true ? "white" : "black"};
        }
        @font-face {
          font-family: "Title";
          font-style: normal;
          font-weight: normal;
          font-display: fallback;
          src: url("${Title}") format("truetype");
        }
        a {
          text-decoration: none;
          color: ${isDarkModeOn == true ? "white" : "black"};
          font-weight: bold;
        }
        a:hover {
          color: ${mainRed};
          transition: all 0.3s ease;
        }
        img {
          display: block;
          max-width: 100%;
        }
        .principal {
          margin-bottom: 30px;
        }
        .principal h1 {
          padding: 20px 20px 0 20px;
        }
        .principal .excerpt {
          padding: 0 20px;
        }
        .bordered {
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
          border-radius: 15px;
        }
        & img {
          border-radius: 15px;
        }
        .border-bottom img {
          border-radius: 0 0 15px 15px;
        }
        .meta {
          display: flex;
          justify-content: center;
        }
        .title-section:before {
          content: "";
          width: 17px;
          height: 32px;
          position: absolute;
          top: 0;
          left: 0;
          background: #c80b0f;
          border-radius: 4px;
        }
        .title-section {
          border-bottom: 4px solid #c80b0f;
          width: max-content;
          padding-left: 7px;
          padding-bottom: 2px;
        }
      `}
    />
  );
};

export default connect(Base);

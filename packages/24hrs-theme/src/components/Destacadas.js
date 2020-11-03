import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../components/Link";
import Autor from "./common/Autor";
import moment from "moment";

const Destacadas = ({ state, actions }) => {
  
  // Buscamos el último post publicado en la sección Carrousel
  useEffect(() => {
    actions.source.fetch("/category/principales/");
  }, []);

  const data = state.source.get("/category/principales/");

  if (data.isCategory) {
    const carrousel = state.source.category[data.id];
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <>
        {posts.slice(0, 3).map((post) => (
          <article key={post.id}>
            <Link href={post.link}>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
            <div className="meta">
              <span className="autor">
                POR: <Autor aut_id={post.author} />
              </span>
              <span className="fecha">
                {moment(post.date).locale("es").format("MMMM D, YYYY h:mm a")}
              </span>
            </div>
          </article>
        ))}
      </>
    );
  }

  return <p>Loading information</p>;
};

export default connect(Destacadas);

const FullBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FiveBlockLeft = styled.div`
  width: 50%;
  display-direction: column;
`;
const FiveBlockRight = styled.div`
  width: 50%;
`;

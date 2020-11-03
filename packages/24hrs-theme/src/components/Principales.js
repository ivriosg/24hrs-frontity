import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../components/Link";
import Featured from "./common/Featured";
import Autor from "./common/Autor";
import moment from "moment";

const Principales = ({ state, actions }) => {
  // Buscamos el último post publicado en la sección Carrousel
  useEffect(() => {
    actions.source.fetch("/category/image_gallery/");
  }, []);

  const data = state.source.get("/category/image_gallery/");

  if (data.isCategory) {
    const carrousel = state.source.category[data.id];
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <>
        {posts.slice(1, 8).map((post) => (
          <article key={post.id}>
            <FullBlock>
              <FiveBlockLeft>
                <Link href={post.link}>
                  <h1
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></h1>
                </Link>
                <p
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></p>
                <div className="meta">
                  <span className="autor">
                    POR: <Autor aut_id={post.author} />
                  </span>
                  <span className="fecha">
                    {moment(post.date)
                      .locale("es")
                      .format("MMMM D, YYYY h:mm a")}
                  </span>
                </div>
              </FiveBlockLeft>
              <FiveBlockRight>
                <div className="bordered">
                  <Link href={post.link}>
                    <Featured img_id={post.featured_media} />
                  </Link>
                </div>
              </FiveBlockRight>
            </FullBlock>
          </article>
        ))}
      </>
    );
  }

  return <p>Loading information</p>;
};

export default connect(Principales);

const FullBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FiveBlockLeft = styled.div`
  width: 50%;
  margin-right: 20px;
`;
const FiveBlockRight = styled.div`
  width: 50%;
`;

import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../components/Link";
import Featured from "../components/Featured";

const Principal = ({ state, actions }) => {
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
        {posts.slice(0, 1).map((post) => ( 
          <article key={post.id}>
            <Link href={post.link}>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
            <div>
              <span>POR: </span> - <span>FECHA</span>
            </div>
            <Featured img_id={post.featured_media} />
          </article>
        ))}
      </>
    );
  }

  return <p>Loading information</p>;
};

export default connect(Principal);

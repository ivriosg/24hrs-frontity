import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "../components/Link";
import Featured from "./common/Featured";
import Autor from "./common/Autor";
import moment from "moment";

const Principal = ({ state, actions }) => {
  // Buscamos el último post publicado en la sección Carrousel
  useEffect(() => {
    actions.source.fetch("/category/image_gallery/");
  }, []);

  const data = state.source.get("/category/image_gallery/");

  if (data.isCategory) {
    const posts = data.items.map(({ type, id }) => state.source[type][id]);

    return (
      <>
        {posts.slice(0, 1).map((post) => (
          <article key={post.id} className="principal bordered">
            <Link href={post.link}>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></h1>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              className="excerpt"
            ></div>
            <div className="meta">
              <span className="autor">
                POR: <Autor aut_id={post.author} />
              </span>
              <span className="fecha">
                {moment(post.date).locale("es").format("MMMM D, YYYY h:mm a")}
              </span>
            </div>
            <div className="border-bottom">
              <Link href={post.link}>
                <Featured img_id={post.featured_media} />
              </Link>
            </div>
          </article>
        ))}
      </>
    );
  }

  return <p>Loading information</p>;
};

export default connect(Principal);

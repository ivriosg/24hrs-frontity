import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../components/Link";

const Slider = ({ state, actions }) => {
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
        AHORA:
        {posts.slice(0, 5).map((post) => (
          <article key={post.id}>
            <SlideContent>
              <Link href={post.link}>
                <h1
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></h1>
              </Link>
            </SlideContent>
          </article>
        ))}
      </>
    );
  }

  return <p>Loading information</p>;
};

export default connect(Slider);

const SlideContent = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`;
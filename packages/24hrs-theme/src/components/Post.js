import React from "react";
import { connect, styled } from "frontity";
import Featured from "./common/Featured";
import Base from "../styles/Base";
import Autor from "./common/Autor";
import moment from "moment";

const gray = "#F1F1F1";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <>
      <Base />
      <PostContainer>
        <PostUpper>
          <span>Aquí va a ir la categoría</span>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
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
        </PostUpper>
        <PostContent>
          <PostDown>
            <div className="image-post">
              <Featured img_id={post.featured_media} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className="content-post"
            ></div>
            <p>Compartir</p>
          </PostDown>
          <PostSidebar>Sidebar</PostSidebar>
        </PostContent>
      </PostContainer>
    </>
  );
};

export default connect(Post);

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;
const PostUpper = styled.div`
  background-color: ${gray};
  text-align: center;
  padding: 30px 0px 120px 0px;
  & h1 {
    font-family: Title;
    font-size: 70px;
    text-transform: uppercase;
    line-height: 74px;
  }
`;
const PostContent = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  margin-top: -100px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
}
`;
const PostDown = styled.div`
  color: #222;
  width: 66.666%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const PostSidebar = styled.div`
  width: 33.333%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

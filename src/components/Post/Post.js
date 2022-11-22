import React from "react";
import { PostContainer } from "./styled";
import Comentario from "../Comentario/Comentario";

const Post = (props) => {

  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alteraCurtida()}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost()}>Apagar</button>

      <Comentario
        comentario={props.comentario}
        adicionaComentario={props.adicionaComentario}
        onChangeComentario={props.onChangeComentario}
        novoComentario={props.novoComentario}
      />
    </PostContainer>
  );
};
export default Post;

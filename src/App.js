import React, { useState } from "react";
import "./index.css";
import Post from "./components/Post/Post";

//!! Os trechos comentados fazem parte do exercício final !!
// !!!!! não descomentar ou modificar até lá !!!!!

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("");
  const [post, setPost] = useState({});
  const [comentario, setComentario] = useState("bbb");
  let [novoComentario, setNovoComentario] = useState("aaa");

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  };

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false
    };

    setPost(novoPost);
    setTextoNovoPost("");
  };

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: !post.curtido
    };
    setPost(alterarCurtida);
  };

  const apagarPost = () => {
    // Apaga o post enviado
    setPost("");
  };

  // Exercício final de debug. Descomentar só depois de finalizar o debug de post
  function adicionaComentario() {
    setNovoComentario(comentario);
    setComentario("");
  }

  const onChangeComentario = (e) => {
    setComentario(e.target.value);
  };

  console.log(comentario);
  console.log(novoComentario);


  return (
    <div className="App">
      <div>
        <input
          placeholder="Digite o texto aqui"
          type="text"
          onChange={onChangeTextoNovoPost}
          value={textoNovoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </div>
      <br />
      <Post
        post={post}
        alteraCurtida={alterarCurtida}
        comentario={comentario}
        apagarPost={apagarPost}
        onChangeComentario={onChangeComentario}
        adicionaComentario={adicionaComentario}
        novoComentario={novoComentario}
      />
    </div>
  );
}

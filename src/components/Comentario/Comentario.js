import React from "react";
import { ComentarioSection } from "./styled";

export default function Comentario(props) {
    return (
        <ComentarioSection>
            <input
                placeholder="Adicionar comentario"
                type="text"
                onChange={props.onChangeComentario}
                value={props.comentario}
            />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.novoComentario}</p>
        </ComentarioSection>
    );
}

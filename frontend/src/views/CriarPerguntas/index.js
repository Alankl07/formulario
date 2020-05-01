import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import api from "../../Services/api";

function Pergunta() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const nomeformulario = localStorage.getItem("nomeFormulario");
  const idFormulario = localStorage.getItem("idFormulario");

  const history = useHistory();
  function criar() {
    alert("Formulário criado com sucesso!");
    localStorage.clear();
    history.push("/");
  }

  async function criarPergunta(e) {
    e.preventDefault();

    const data = {
      pergunta,
      resposta,
    };

    try {
      await api.post("pergunta", data, {
        headers: {
          Authorization: idFormulario,
        },
      });

      alert("Pergunta adicionada com sucesso!");

      history.push("/");
      history.push("criarPergunta");
    } catch (err) {
      alert("Erro ao criar pergunta");
    }
  }

  return (
    <div>
      <h1>{nomeformulario}</h1>
      <form onSubmit={criarPergunta}>
        <input
          className="input-nomeFormulario"
          type="text"
          placeholder="Digite a pergunta"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />
        <button type="submit" className="botao-adicionar">
          ADICIONAR PERGUNTA
        </button>
      </form>
      <form onSubmit={criar}>
        <button type="submit" className="botao-criarFormulario">
          CRIAR FORMULÁRIO
        </button>
      </form>
    </div>
  );
}

export default Pergunta;

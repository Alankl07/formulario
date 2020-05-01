import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import api from '../../Services/api'

export default function CriarFormulario() {
  const [nome, setTitulo] = useState('');
  const history = useHistory();

  async function criarFormulario(e) {
    e.preventDefault();
    const data = {
      nome
    }

    try{
      const response = await api.post('planilha', data)
      localStorage.setItem('idFormulario', response.data.id)
      localStorage.setItem('nomeFormulario', nome)
      alert(`Sucesso! seu id: ${response.data.id}`)
      history.push('/criarPergunta')
    }catch(err){
      alert(err)
    }
  }

  return (
    <div>
      <h1>Dê um nome para o seu formulário</h1>
      <form onSubmit={criarFormulario} >
        <input
          type="text"
          value={nome}
          onChange={e => setTitulo(e.target.value)}
          className="input-nomeFormulario"
          placeholder="Digite aqui o nome do formulário"
        />

        <button id="btn" className="botao-adicionar" type="submit">
          REGISTRAR FORMULÁRIO
        </button>
      </form>
    </div>
  );
}

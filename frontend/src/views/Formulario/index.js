import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import api from "../../Services/api";

function Formulario() {
  const [perguntas, setPergunta] = useState([]);
  const [resposta, setResposta] = useState([]);
  const [formulario, setFormulario] = useState([]);

  const idFormulario = localStorage.getItem("idFormulario");
  const nomePlanilha = perguntas.map((perguntas) => perguntas.nome);
  const formularioid = formulario.map((formulario) => formulario.id);
  const pergunta = perguntas.map((perguntas) => perguntas.pergunta);

  const history = useHistory();

  function respostas(e, index) {
    resposta[index] = e.target.value;
    setResposta([...resposta]);
  }

  async function submt(e) {
    e.preventDefault();

    var TamanhoArray = perguntas.length
    var id = formularioid[formularioid.length - TamanhoArray]

    
    if(id == undefined){
      
    var idFormularioRespondido  =  1
    }else{
      var idFormularioRespondido  = id + 1
    }

  

    try {
      for (var i = 0; i < perguntas.length; i++) {
        const data = {
          resposta: resposta[i],
        };
        await api.post("responderFormulario", data, {
          headers: {
            id: idFormularioRespondido ,
            Authorization: idFormulario,
            nome: nomePlanilha[0],
            pergunta: pergunta[i]
          },
        });
      }

      alert("Formulário preenchido com sucesso!");
      history.push("/");
    } catch (err) {
      alert("erro");
    }
  }

  useEffect(() => {
    api
      .get("list", {
        headers: {
          Authorization: idFormulario,
        },
      })
      .then((response) => {
        setPergunta(response.data);
      });

      api
      .get("listresposta", {
        headers: {
          Authorization: idFormulario,
        },
      })
      .then((response) => {
        setFormulario(response.data);
      });
  }, []);

  return (
    <div className="div-formulario">
      <h1>{nomePlanilha[0]}</h1>
      <div>
        <form onSubmit={submt}>
          <ul>
            {perguntas.map((pergunta, index) => (
              <li key={index}>
                <br />
                <label>{pergunta.pergunta}: </label>
                <input
                  className="input-formulario"
                  type="text"
                  onChange={(e) => respostas(e, index)}
                  required
                />
              </li>
            ))}
          </ul>
          <button type="submit" className="btn-formulario">
            RESPONDER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;

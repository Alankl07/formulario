import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import api from "../../Services/api";

function Formulario() {
  const [formulario, setFormulario] = useState([]);

  const idFormulario = localStorage.getItem("idFormulario");
  const nomeFormulario = formulario.map((formulario) => formulario.nome);

  useEffect(() => {
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
    <div className="div-formularioRes">
      <h1 className="formulario-h1">FORMULÁRIO:  {nomeFormulario[0]}</h1>
      <div>
        <ul className="formulario-ul">
          {formulario.map((formulario, index) => (
            <li key={index}>
              <br />
              <label className="formulario-label">{formulario.pergunta}: </label>
              <p className="formulario-p">{formulario.resposta}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Formulario;

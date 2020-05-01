import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

import api from '../../Services/api';

function CriarFormulario() {
    const [idFormulario, setIdFormulario] = useState('');

    const history = useHistory();

    async function buscarFormulario(e){
        e.preventDefault();

        try{
            const response = await api.get('list', {
                headers:{
                    Authorization: idFormulario
                }
            })
            if(response.data.length !== 0){
                localStorage.setItem('idFormulario', idFormulario)
                history.push('formulario')
            }else{
                alert('Planilha não existe')
            }
        }catch(err){
            alert('Erro na busca')
        }
        

    }

    async function buscarFormularioRespondido(e){
      e.preventDefault();

      try{
          const response = await api.get('list', {
              headers:{
                  Authorization: idFormulario
              }
          })
          if(response.data.length !== 0){
              localStorage.setItem('idFormulario', idFormulario)
              history.push('formularioRespondido')
          }else{
              alert('Planilha não existe')
          }
      }catch(err){
          alert('Erro na busca')
      }
      

  }

  return (
    <div>
      <div className="container-formulario">
        <Link to="/criarFormulario">
          <h1>CRIAR FORMULÁRIO</h1>
        </Link>
      </div>
      <div className="container-ResponderFormulario">
        <form onSubmit={buscarFormulario} >
          <input
            className="input-Formulario"
            type="text"
            onChange={e => setIdFormulario(e.target.value)}
            placeholder="  Informe o ID do formulário"
          />
          <button type="submit" className="btn-VerFormulario">RESPONDER FORMULÁRIO</button>
        </form>
      </div>
      
      <div className="container-VerFormularioRespondido">
        <form onSubmit={buscarFormularioRespondido} >
          <input
            className="input-VerFormulario"
            type="text"
            onChange={e => setIdFormulario(e.target.value)}
            placeholder="  Informe o ID do formulário"
          />
          <button type="submit" className="btn-VerFormulario">VER FORMULÁRIOS RESPONDIDOS</button>
        </form>
      </div>
    </div>
  );
}

export default CriarFormulario;
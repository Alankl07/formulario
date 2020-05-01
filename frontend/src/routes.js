import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import telaInicial from './views/Inicial';
import criarFormulario from "./views/CriarFormulario";
import pergunta from './views/CriarPerguntas';
import formulario from './views/Formulario';
import formularioRespondido from './views/FormularioRespondido';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={telaInicial} />
                <Route path="/criarFormulario" component={criarFormulario} />
                <Route path="/criarPergunta" component={pergunta} />
                <Route path="/formulario" component={formulario} />
                <Route path="/formularioRespondido" component={formularioRespondido} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
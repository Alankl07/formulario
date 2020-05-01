const express = require('express');
const routes = express.Router();

const formularioController = require('./controller/formularioController');
const perguntaController = require('./controller/perguntaController');
const profileController = require('./controller/profileController');
const resposta = require('./controller/RespostaController');
const responderFormulario = require('./controller/formularioRespondidoController');


routes.post('/pergunta', perguntaController.create);
routes.get('/listaPergunta', perguntaController.index);
routes.post('/planilha', formularioController.create);
routes.get('/lista', formularioController.index);
routes.get('/list', profileController.index);
routes.put('/resposta', resposta.Update);
routes.post('/responderFormulario', responderFormulario.create);
routes.get('/listresposta', responderFormulario.index);

module.exports = routes;
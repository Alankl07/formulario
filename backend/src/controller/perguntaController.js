const connection = require('../database/connection');

module.exports = {
    async create (request, response){
        const {pergunta, resposta} = request.body;
        const formulario_id = request.headers.authorization

        const [ id ] = await connection('perguntas').insert({
            pergunta,
            resposta,
            formulario_id
        })

        return response.json({ id })
    },

    async index (request, response){
        const perguntas = await connection('perguntas').select('*');

        return response.json(perguntas);
    }
}
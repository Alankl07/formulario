const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {resposta} = request.body
        const id = request.headers.id
        const nome = request.headers.nome
        const pergunta = request.headers.pergunta 
        const formulario_id = request.headers.authorization

        await connection('formulario_respondido').insert({
            id,
            nome,
            pergunta,
            resposta,
            formulario_id
        })

        return response.json(id)

    },

    async index(request, response){
        const formulario_id = request.headers.authorization
        const resp = await connection('formulario_respondido').select('*').where('formulario_id', formulario_id)

        return response.json(resp)
    }
}
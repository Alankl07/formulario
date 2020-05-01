const connection = require('../database/connection')

module.exports = {
    async Update(request, response){
        const id = request.headers.id
        const resposta = request.body

        const resp = await connection('perguntas').update(resposta).where('id', id,);

        return response.json(resp)
    },

    async list(request, response){
        const formulario_id = request.headers.authorization
        const resp = await connection("formulario_respondido").select("*").where('formulario_id', formulario_id)

        return response.json(resp)
    }
    
}
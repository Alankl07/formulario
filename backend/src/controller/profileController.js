const connection = require('../database/connection')

module.exports = {
    async index (request, response){
        const formulario_id = request.headers.authorization

        const resp = await connection('perguntas').join('formulario', 'formulario.id', '=', 'perguntas.formulario_id').select([
            'perguntas.*',
            'formulario.nome',
        ]).where('formulario_id', formulario_id)

        return response.json(resp)
    }
}
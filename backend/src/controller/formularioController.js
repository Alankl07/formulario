const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { nome } = request.body
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("formulario").insert({
      id,
      nome,
    });

    return response.json({ id });
  },

  async index(request, response){
      const formularios = await connection('formulario').select('*');
      
      return response.json(formularios);
  }
};

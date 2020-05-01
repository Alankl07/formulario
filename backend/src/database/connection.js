const knex = require('knex')
const configuaration = require('../../knexfile');

const connection = knex(configuaration.development);

module.exports = connection;
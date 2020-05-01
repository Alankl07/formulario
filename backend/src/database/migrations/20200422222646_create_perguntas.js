
exports.up = function(knex) {
  return knex.schema.createTable('perguntas', function(table){
      table.increments();
      table.string('pergunta').notNullable();
      table.string('resposta').notNullable();

      table.string('formulario_id').notNullable();

      table.foreign('formulario_id').references('id').inTable('formulario');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('perguntas');
};

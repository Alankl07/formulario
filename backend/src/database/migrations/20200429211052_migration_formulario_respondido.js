
exports.up = function(knex) {
  return knex.schema.createTable("formulario_respondido", function(table){
      table.integer('id').notNullable();
      table.string('nome').notNullable();
      table.string('pergunta').notNullable();
      table.string('resposta').notNullable();

      table.string('formulario_id').notNullable();
      table.foreign('formulario_id').references('id').inTable('formulario');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('formulario_respondido')
};

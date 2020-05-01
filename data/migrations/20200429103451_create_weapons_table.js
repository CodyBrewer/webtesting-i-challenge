
exports.up = function createWeaponsTable(knex) {
  return knex.schema.createTable('weapons', (table) => {
    // auto incrementing weaponid
    table.increments('weaponid');
    // weapon name
    table.text('name').notNullable();
    // weapon durability
    table.integer('durability').defaultTo(100);
    // weapon enhancement
    table.integer('enhancement').defaultTo(0);
  });
};

exports.down = function dropWeaponsTable(knex) {
  return knex.schema.dropTableIfExists('weapons');
};

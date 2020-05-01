
exports.seed = function seedWeapons(knex) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(() => knex('weapons').insert([
      { name: 'sword', durability: 100, enhancement: 0 },
      { name: 'bow', durability: 90, enhancement: 15 },
      { name: 'lance', durability: 20, enhancement: 20 },
    ]));
};

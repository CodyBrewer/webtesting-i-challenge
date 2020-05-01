const db = require('../../data/dbConfig.js');

const table = 'weapons';

function get() {
  return db(table);
}

function getBy(filter) {
  return db(table).where(filter).first();
}

async function add(weapon) {
  const weaponid = await db(table).insert(weapon);
  return weaponid
    ? getBy({ weaponid })
    : null;
}

function remove(weaponid) {
  return db(table).where({ weaponid }).del();
}

function update(weaponid, changes) {
  return db(table).where({ weaponid }).first().update(changes);
}

module.exports = {
  get,
  getBy,
  add,
  remove,
  update,
};

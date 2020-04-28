// Returns item modified according to the rules defined by the client for the enhancement success.
function success(item) {
  return { ...item };
}

// Returns item modified according to the rules defined by the client for the enchancement failure.
function fail(item) {
  if (item.enhancement < 15) {
    const decreased = item.durability - 5;
    return decreased < 0
      ? { ...item, durability: 0 }
      : { ...item, durability: decreased };
  }
  return { ...item };
}

// Repair, returns the item with durability set to 100.
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

module.exports = {
  success,
  fail,
  repair,
  get,
};

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
  } if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      const decreased = item.durability - 10;
      const dehanced = item.enhancement - 1;
      if (decreased > 0 && dehanced > 0) {
        return { ...item, durability: decreased, enhancement: dehanced };
      }
      if (decreased < 0 && dehanced > 0) {
        return { ...item, durability: 0, enhancement: dehanced };
      }
      return { ...item, durability: 0, enhancement: 0 };
    }
    const decreased = item.durability - 10;
    return decreased > 0
      ? { ...item, durability: decreased }
      : { ...item, durability: 0 };
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

function success(item) {
  return item.enhancement === 20 ? item : item.enhancement++;
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability - 5;
  } else if (item.enhancement >= 15) {
    item.durability -= 10;
    item.enhancement--;
  }
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
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

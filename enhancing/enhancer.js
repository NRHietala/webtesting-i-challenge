function success(item) {
  if (item.enhancement === 20) {
    return item;
  } else {
    item.enhancement++;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }

  if (item.enhancement >= 16) {
    item.enhancement--;
  }
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}]${item.name}`;
  }
}

module.exports = {
  success,
  fail,
  repair,
  get,
};

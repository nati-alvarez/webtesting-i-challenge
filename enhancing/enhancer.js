module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { 
    ...item,
    enchantment: item.enchantment === 20? item.enchantment: ++item.enchantment
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { 
    ...item ,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}

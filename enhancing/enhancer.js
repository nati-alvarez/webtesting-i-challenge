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
  const newItem = {
    ...item
  }

  if(item.enchantment >= 16){
    newItem.enchantment  = --item.enchantment;
    newItem.durability -= 10;
  }
  else if(item.enchantment === 15){
    newItem.durability -= 10;
  }
  else if(item.enchantment < 15){
    newItem.durability  -= 5;
  }
  
  return newItem;
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

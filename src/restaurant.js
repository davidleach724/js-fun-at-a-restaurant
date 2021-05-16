function createRestaurant(restaurantName) {
  restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}


function addMenuItem(restaurant, addedItem) {
  var foodMenuType = restaurant.menus[addedItem.type];

  for (var i = 0; i < foodMenuType.length; i++) {
    if (addedItem === foodMenuType[i]) {
      return
    }
  }
  foodMenuType.push(addedItem);
}


function removeMenuItem(restaurant, name, type) {
var menuType = restaurant.menus[type];

  for (var i = 0; menuType.length; i++) {
    if (name === menuType[i].name) {
      menuType.splice(i, 1);
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${name}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

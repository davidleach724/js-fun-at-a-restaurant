function createRestaurant(restaurantName) {
  restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
}


function addMenuItem(restaurant, addedItem) {
  var foodMenuType = restaurant.menus[addedItem.type]; //declares a variable for readability

  for (var i = 0; i < foodMenuType.length; i++) { //looks through the specific foodMenuType array to see if already exists
    if (addedItem === foodMenuType[i]) {
      return; //if found, it will return and not add to the menu
    }
  }
  foodMenuType.push(addedItem); //if not found, the item will be added to the appropriate array
}


function removeMenuItem(restaurant, name, type) {
  var menuType = restaurant.menus[type]; //declares variabe for readability

  for (var i = 0; menuType.length; i++) {
    if (name === menuType[i].name) { //searaches through specific menuType array to see if it exists
      menuType.splice(i, 1); //if it does, removies it via splice and returns interpolated message
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${name}, try adding a new recipe!`; //if not returns interpolated message of nonexistent food
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};

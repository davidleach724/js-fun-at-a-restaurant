class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    }

  greetCustomer(customer, morning) {
    if (morning === true) {
      return `Good morning, ${customer}!`
    } else {}
      return `Hello, ${customer}!`;
    }

  checkForFood(foodItem) {
  var foodItemType = foodItem.type

    for (var i = 0; i < this.restaurant.menus[foodItemType].length; i++) {
      if (foodItem.name === this.restaurant.menus[foodItemType][i].name) {
        return `Yes, we're serving ${foodItem.name} today!`;
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
}

module.exports = Chef;

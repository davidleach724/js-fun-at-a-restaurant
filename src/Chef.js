class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }


  greetCustomer(customer, morning) {
    if (morning === true) { //checks specifically for a true argurment of morning
      return `Good morning, ${customer}!`;
    } else {
    }
    return `Hello, ${customer}!`; //if false or no argurment, this interpolated message will return
  }


  checkForFood(foodItem) {
    var foodItemType = foodItem.type; //varibale for the food type location

    for (var i = 0; i < this.restaurant.menus[foodItemType].length; i++) {
      if (foodItem.name === this.restaurant.menus[foodItemType][i].name) { //searches for foodItem in the specific restaurant menu
        return `Yes, we're serving ${foodItem.name} today!`; //returns if found
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`; //returns if not found
  }
}


module.exports = Chef;

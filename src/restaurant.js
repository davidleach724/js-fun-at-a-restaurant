function createRestaurant(restaurantName) {
  pizzaRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return pizzaRestaurant;
}


function addMenuItem(pizzaRestaurant, addedItem) {



  var menuType = addedItem.type;

  if (menuType === 'breakfast') {
      for (var i = 0; i < pizzaRestaurant.menus.breakfast.length; i++) {
        if (addedItem === pizzaRestaurant.menus.breakfast[i]) {
          return
        }
      }
      pizzaRestaurant.menus.breakfast.push(addedItem);
  } else if (menuType === 'lunch') {
      for (var i =0; i < pizzaRestaurant.menus.lunch.length; i++) {
        if (addedItem === pizzaRestaurant.menus.lunch[i]) {
          return
        }
      }
      pizzaRestaurant.menus.lunch.push(addedItem);
  } else if (menuType === 'dinner') {
      for (var i = 0; i < pizzaRestaurant.menus.dinner.length; i++) {
        if (addedItem === pizzaRestaurant.menus.dinner[i]) {
          return
        }
      }
      pizzaRestaurant.menus.dinner.push(addedItem);
    }

}


function removeMenuItem(pizzaRestaurant, name, type) {

  if (type === 'breakfast') {
      for (var i = 0; i < pizzaRestaurant.menus.breakfast.length; i++) {
        if (name === pizzaRestaurant.menus.breakfast[i].name) {
          pizzaRestaurant.menus.breakfast.splice(i, 1);
          return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
        }
      }
    }

  if (type === 'lunch') {
      for (var i = 0; i < pizzaRestaurant.menus.lunch.length; i++) {
        if (name === pizzaRestaurant.menus.lunch[i].name) {
          pizzaRestaurant.menus.lunch.splice(i, 1);
          return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
        }
      }
    }
  if (type === 'dinner') {
      for (var i = 0; i < pizzaRestaurant.menus.dinner.length; i++) {
        if (name === pizzaRestaurant.menus.dinner[i].name) {
          pizzaRestaurant.menus.dinner.splice(i, 1);
          return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
        }
      }
    }
    else {
      return `Sorry, we don't sell ${name}, try adding a new recipe!`;
    }
  }
        //pizzaRestaurant.menus.breakfast.push(addedItem);
  // } else if (menuType === 'lunch') {
  //     for (var i =0; i < pizzaRestaurant.menus.lunch.length; i++) {
  //       if (addedItem === pizzaRestaurant.menus.lunch[i]) {
  //         return
  //       }
  //     }
  //     pizzaRestaurant.menus.lunch.push(addedItem);
  // } else if (menuType === 'dinner') {
  //     for (var i = 0; i < pizzaRestaurant.menus.dinner.length; i++) {
  //       if (addedItem === pizzaRestaurant.menus.dinner[i]) {
  //         return
  //       }
  //     }
  //     pizzaRestaurant.menus.dinner.push(addedItem);
  //   }
// for (var i = 0; i < pizzaRestaurant.length; i++) {
//   if (name = pizzaRestaurant.menus.breakfast[i].name) {
//     pizzaRestaurant.menus.breakfast.splice(i, 1);
//
//     return `No one is eating our ${name} - is has been removed from the ${type} menu!`;
//   }
// }



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

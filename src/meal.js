function nameMenuItem(name) {
  var deliciousName = `Delicious ${name}`;

  return deliciousName;
}


function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }

  return menuItem;
}


function addIngredients(toppings, ingredientsArray) {

//Runs through the array and compares toppings with each value in the ingredientsArray
for (i=0; i<ingredientsArray.length; i) {
//if toppings is equal to the value of the current index, it will return the array as is
  if (toppings === ingredientsArray[i]) {
    return ingredientsArray;
//if it is not equal, it will increase the increment expression and keep going through the loop
  } else {
    i++;
  }
}
//if the loop finishes and has not found duplicate, thus returned, the topping will be added to the array
// and then returned
  ingredientsArray.push(toppings);

  return ingredientsArray;
}


function formatPrice(price) {
  var formattedPrice = `$${price}`;

  return formattedPrice;
}


function decreasePrice(price) {
  var discountedPrice = price*.9;

  return discountedPrice;
}


function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }

  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

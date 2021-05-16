function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
  return takeOrder;
}


function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) { //Initiates for loop to search for order number in the array
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1); //if found, the value will be removed at the index
    }
  }
  return deliveryOrders;
}


function listItems(deliveryOrders) {
  var listedItems = []; //creates empty array

  for (var i = 0; i < deliveryOrders.length; i++) {
    listedItems.push(deliveryOrders[i].item); //adds all deliveryOrders.items to the array
  }
  return listedItems.join(", "); //converts the array into a string, joined by ", "
}


function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (item === deliveryOrders[i].item) { //looks for an item match in the deliveryOrders array
      return true; //if found return true
    }
  }
  return false; //if not found return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};

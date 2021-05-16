
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
  return takeOrder;
}


function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}


function listItems (deliveryOrders) {
  var listedItems = [];
  var items = '';
    for (var i = 0; i < deliveryOrders.length; i++) {
      listedItems.push(deliveryOrders[i].item);
  }
  return listedItems.join(', ');
}


function searchOrder(deliveryOrders, item) {
  for (var i =0; i < deliveryOrders.length; i++) {
    if (item === deliveryOrders[i].item) {
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder

}

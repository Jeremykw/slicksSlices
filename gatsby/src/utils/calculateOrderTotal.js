import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  if (!order || order.length < 1) return 0;
  const orderTotal = order.reduce((total, item) => {
    const pizzaPrice = pizzas.find((pizza) => pizza.id === item.id).price;
    return total + calculatePizzaPrice(item.size, pizzaPrice);
  }, 0);
  return orderTotal;
}

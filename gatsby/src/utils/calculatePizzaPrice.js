const pizzaSizes = {
  S: 0.75,
  M: 1,
  L: 1.23,
};

export default function pizzaPrice(size, price) {
  return price * pizzaSizes[size];
}

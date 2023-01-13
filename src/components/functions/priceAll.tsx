export function priceAll(cart: any) {
  let x: number = 0;
  cart.map((data: any) => (x = x + data.price * data.amount));
  return Math.round(x * 100) / 100;
}

export function deleteDuplicats(cart: any) {
  let clone = JSON.parse(JSON.stringify(cart));
  let count = clone.filter(
    (data: any) => data.id === clone[clone.length - 1].id
  );
  let qqq = clone.findIndex(
    (data1: any) => data1.id === clone[clone.length - 1].id
  );

  if (count.length >= 2) {
    clone[qqq].amount = clone[qqq].amount + clone[cart.length - 1].amount;
    cart.pop();
  }
  return clone;
}

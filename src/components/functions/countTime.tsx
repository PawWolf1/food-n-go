export function countTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = minutes < 30 ? date.getHours() : date.getHours() + 1;
  let times = ["As soon as possible"];
  for (hours; hours < 24; hours++) {
    times.push(hours.toString() + ":" + "00");
    times.push(hours.toString() + ":" + "30");
  }
  return times;
}

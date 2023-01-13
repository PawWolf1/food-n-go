export function showProductInfo(active: boolean, id: any) {
  let e = document.getElementById(`InfoBox${id}`);

  if (e && active === true) {
    e.style.opacity = `1`;
    e.style.transition = "0.6s ease-out";
  } else if (e) {
    e.style.opacity = `0`;
    e.style.transition = "0.6s ease-out";
  }
}

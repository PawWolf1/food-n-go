export function moveCartSlider(active: number) {
  let e = document.getElementById("CardSlider");

  if (e && active !== 0) {
    e.style.transform = "translate(-100%)";
    e.style.transition = "0.5s ease-out";
  } else if (e) {
    e.style.transform = "translate(0%)";
    e.style.transition = "0.5s ease-out";
  }
}

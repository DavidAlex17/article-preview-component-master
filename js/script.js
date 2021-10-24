let normal = document.querySelector("#normal-state");
let active = document.querySelector("#active-state");
let triangle = document.querySelector("#triangle");
let buttonOne = document.querySelector("#button-1")
let buttonTwo = document.querySelector("#button-2");

active.style.display = "none";

normal.addEventListener("click", toggle => {
  normal.style.display = "none";
  active.style.display = "inline-flex";
})

function toggle() {
  if (normal.style.display == "none") {
    active.style.display = "inline-flex";
  }
}
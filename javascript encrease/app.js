const counter = document.querySelector("#counter");
const button1 = document.getElementById("increase");
const button2 = document.getElementById("dicrease");
let index = 0;
counter.innerHTML = index;

button1.addEventListener("click", () => {
  index++;
  counter.innerHTML = index;
  if (index === 0) {
    counter.style.color = "white";
  } else if (index > 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "blue";
  }
});

button2.addEventListener("click", () => {
  index--;
  counter.innerHTML = index;
  if (index === 0) {
    counter.style.color = "white";
  } else if (index > 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "blue";
  }
});

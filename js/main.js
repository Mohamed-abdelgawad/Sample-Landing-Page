let mainImg = document.querySelector(".main-img");
let container = document.querySelector(".container");
let phones = function (phone) {
  return (mainImg.src = phone);
};
let colors = function (color) {
  return (container.style.backgroundColor = color);
};

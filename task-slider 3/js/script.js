/*const div = document.querySelector("#text");
div.onclick = function () {
  div.innerHTML = "6789";
  div.className = "test";
  div.style.color = "#F15";
  div.style.fontSize = "27px";
}*/

/*const slides = document.querySelectorAll(".slider_img");
console.log(slides);
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;
*/
const btn_prev = document.querySelector("#slider .slider-buttons .button-prev");
const btn_next = document.querySelector("#slider .slider-buttons .button-next");

const images = document.querySelectorAll("#slider .slider img");
console.log(images);
let i = 0;

btn_prev.onclick = function () {
  images[i].className = "next-player";
  i--;

  if (i < 0) {
    i = images.length - 1;
  };

  images[i].className = "showed";
  
};


btn_next.onclick = function () {
  images[i].className = "";
    i++;
  
  if (i >= images.length) {
    i = 0;
  };
  
  images[i].className = "showed";
  };







/*const slides = document.querySelector("slider_img");
console.log(slides);
let current = 0;

function slider() {
  for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
  }
  console.log(slider);
}
*/
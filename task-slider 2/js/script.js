/*const div = document.querySelector("#text");
div.onclick = function () {
  div.innerHTML = "6789";
  div.className = "test";
  div.style.color = "#F15";
  div.style.fontSize = "27px";
}*/
const btn_prev = document.querySelector("#slider .buttons .prev");
const btn_next = document.querySelector("#slider .buttons .next");

const images = document.querySelectorAll("#slider .photos img");
console.log(images);
let i = 0;

btn_prev.onclick = function () {
  images[i].className = "";
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



 
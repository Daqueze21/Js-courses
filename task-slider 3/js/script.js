
const btn_prev = document.querySelector("#slider .slider-buttons .button-prev");
const btn_next = document.querySelector("#slider .slider-buttons .button-next");

const images = document.querySelectorAll("#slider .slider img");
const images_length = images.length;
console.log(images);
let i = 2;



btn_prev.onclick = function () {
  if (i == 0) {
    images[i].classList.remove("showed");
    images[i].classList.add("next-player");

    images[i + 1].classList.remove("next-player");

    images[images_length - 1].classList.remove("prev-player");
    images[images_length - 1].classList.add("showed");

    images[images_length - 2].classList.add("prev-player");

    i = images_length -1; 
  } else if (i == 1) {
    images[i].classList.remove("showed");
    images[i].classList.add("next-player");

    images[i + 1].classList.remove("next-player");

    images[i - 1].classList.remove("prev-player");
    images[i - 1].classList.add("showed");

    images[images_length - 1].classList.add("prev-player");

    i--;
  } else if (i == images_length - 1) {
    images[i].classList.remove("showed");
    images[i].classList.add("next-player");

    images[0].classList.remove("next-player");

    images[i - 1].classList.remove("prev-player");
    images[i - 1].classList.add("showed");

    images[i - 2].classList.add("prev-player");

    i--;
  } else {
    images[i].classList.remove("showed");
    images[i].classList.add("next-player");

    images[i + 1].classList.remove("next-player");

    images[i - 1].classList.remove("prev-player");
    images[i - 1].classList.add("showed");

    images[i - 2].classList.add("prev-player");

    i--;
  }
};

btn_next.onclick = function () {
  if (i == images_length-2) {
    images[i].classList.remove("showed");
    images[i].classList.add("prev-player");

    images[i - 1].classList.remove("prev-player");

    images[i + 1].classList.remove("next-player");
    images[i + 1].classList.add("showed");

    images[0].classList.add("next-player");
    i++;
  } else if (i == images_length - 1) {
    images[i].classList.remove("showed");
    images[i].classList.add("prev-player");

    images[images_length - 2].classList.remove("prev-player");

    images[0].classList.remove("next-player");
    images[0].classList.add("showed");

    images[1].classList.add("next-player");

    i = 0;
  } else if (i == 0) {
    images[i].classList.remove("showed");
    images[i].classList.add("prev-player");

    images[images_length - 1].classList.remove("prev-player");

    images[i + 1].classList.remove("next-player");
    images[i + 1].classList.add("showed");

    images[i + 2].classList.add("next-player");
    
    i++;
  } else{
    images[i].classList.remove("showed");
    images[i].classList.add("prev-player");

    images[i - 1].classList.remove("prev-player");

    images[i + 1].classList.remove("next-player");
    images[i + 1].classList.add("showed");

    images[i + 2].classList.add("next-player");

    i++;
  }
}



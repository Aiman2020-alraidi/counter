"use strict";
const btns = document.querySelectorAll(".btns");
const number = document.querySelector(".number");
let count = 0;

btns.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    const element = e.target.classList;
    if (element.contains("decrease")) {
      decrease(count--);
    } else if (element.contains("increase")) {
      increase(count++);
    } else {
      count = 0;
    }
    reset();
    number.innerHTML = count;
  });
});

// change color number
const colors = (colors) => {
  number.style.color = colors;
};

// decrease number
const decrease = (counts) => {
  count < 0 ? colors("red") : "";
};

// increase number
const increase = (counts) => {
  count > 0 ? colors("green") : "";
};

// reset number
const reset = () => {
  count === 0 ? colors("#222") : "";
};

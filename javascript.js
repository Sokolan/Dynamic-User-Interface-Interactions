const createDropDown = (button, menu) => {
  button.addEventListener("click", () => menu.classList.toggle("visible"));
};

createDropDown(document.querySelector("button.nav"), document.querySelector('.menu'));

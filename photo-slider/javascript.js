document.querySelector('button.next-img').addEventListener('click', () => {
  const currentImg = document.querySelector('.current-slide');
  const currentImgNumber = Number.parseInt(currentImg.getAttribute("slider"));
  currentImg.classList.toggle('current-slide');

  const currentDot = document.querySelector('.current-dot');
  currentDot.classList.toggle('current-dot');

  const nextImgNum = (currentImgNumber + 1) === 6 ? 1 : currentImgNumber + 1;
  const nextImg = document.querySelector(`[slider="${nextImgNum}`);
  nextImg.classList.toggle('current-slide');

  const nextDot = document.querySelector(`[img-num="${nextImgNum}"]`);
  nextDot.classList.toggle('current-dot');
});

document.querySelector('button.prev-img').addEventListener('click', () => {
  const currentImg = document.querySelector('.current-slide');
  const currentImgNumber = Number.parseInt(currentImg.getAttribute("slider"));
  currentImg.classList.toggle('current-slide');

  const currentDot = document.querySelector('.current-dot');
  currentDot.classList.toggle('current-dot');

  const prevImgNum = (currentImgNumber - 1) === 0 ? 5 : currentImgNumber - 1;
  const prevImg = document.querySelector(`[slider="${prevImgNum}`);
  prevImg.classList.toggle('current-slide');

  const prevDot = document.querySelector(`[img-num="${prevImgNum}"]`);
  prevDot.classList.toggle('current-dot');
});

document.querySelectorAll('button.dot').forEach((dot) => dot.addEventListener(
  "click", (event) => {
    const currentImg = document.querySelector('.current-slide');
    currentImg.classList.toggle('current-slide');
    const currentDot = document.querySelector('.current-dot');
    currentDot.classList.toggle('current-dot');

    const currentImgNum = event.currentTarget.getAttribute("img-num");
    const newImg = document.querySelector(`[slider="${currentImgNum}"]`);
    newImg.classList.toggle('current-slide')
    console.log(currentImg);

    event.currentTarget.classList.toggle('current-dot');
  }
))
const slideX = document.querySelector('.products');
const slideY = document.querySelector('.cart');

function slideAnimationX() {
  const arrowLeft = document.querySelector('.arrows-left');
  const arrowRight = document.querySelector('.arrows-right');

  arrowLeft.addEventListener('click', () => {
    slideX.scrollLeft -= 384;
  });

  arrowRight.addEventListener('click', () => {
    slideX.scrollLeft += 384;
  });
}

function slideAnimationY() {
  const arrowUp = document.querySelector('.arrows-up');
  const arrowDown = document.querySelector('.arrows-down');

  arrowUp.addEventListener('click', () => {
    slideY.scroll(0, 1000);
  });

  arrowDown.addEventListener('click', () => {
    slideY.scroll(1000, 0);
  });
}

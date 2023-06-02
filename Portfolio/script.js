document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.querySelector('.menu-icon').classList.toggle('cross');
  });
  
//Carousel
const carouselItems = document.querySelector('.carousel-items');
let translateValue = 0;

function slideCarousel(direction) {
  const itemWidth = carouselItems.firstElementChild.offsetWidth + parseInt(window.getComputedStyle(carouselItems.firstElementChild).marginRight);
  const containerWidth = carouselItems.offsetWidth;
  const itemsInView = Math.floor(containerWidth / itemWidth);
  const itemsToScroll = direction === 'next' ? itemsInView : -itemsInView;
  
  translateValue += itemsToScroll * itemWidth;

  if (translateValue < -(carouselItems.scrollWidth - containerWidth)) {
    translateValue = 0;
  } else if (translateValue > 0) {
    translateValue = -(carouselItems.scrollWidth - containerWidth);
  }

  carouselItems.style.transform = `translateX(${translateValue}px)`;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  slideCarousel('prev');
});

document.querySelector('.next-btn').addEventListener('click', () => {
  slideCarousel('next');
});

const slidesContainer = document.querySelector('.slidesContainer');
const navigation = document.querySelectorAll('.navigation');

const slides = [
  {title: 'Slide 1', image: 'http://...'},
  {title: 'Slide 2', image: 'http://...'},
  {title: 'Slide 3', image: 'http://...'},
];

let currentSlide = 0;
const slideCount = slides.length;

navigation.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('navigation-prev')) {
      currentSlide -= 1;

      if (currentSlide < 0) {
        currentSlide = slideCount - 1;
      }
    } else {
      currentSlide += 1;

      if (currentSlide > slideCount - 1) {
        currentSlide = 0;
      }
    }

    slidesContainer.style.left = '-' + (currentSlide * 500) + 'px';
  })
});

// setInterval(() => {
//   // document.querySelector('.navigation-next').click();

//   currentSlide += 1;
//   if (currentSlide > slideCount - 1) {
//     currentSlide = 0;
//   }
//   slidesContainer.style.left = '-' + (currentSlide * 500) + 'px';
// }, 1000)
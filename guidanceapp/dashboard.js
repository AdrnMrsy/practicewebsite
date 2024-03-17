// script.js

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ?
        'bx bx-x-circle' :
        'bx bx-menu';
};

// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = 'block';
}

showSlides(); // Show initial slide

// Previous slide button event listener
prevButton.addEventListener('click', function() {
  slideIndex--;
  showSlides();
});

// Next slide button event listener
nextButton.addEventListener('click', function() {
  slideIndex++;
  showSlides();
});

// Automatically transition between slides
setInterval(function() {
  slideIndex++;
  showSlides();
}, 15000); // 15 seconds interval



// script.js
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
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

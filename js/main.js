// Select Elements
const slides = document.querySelector(".slides");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");

// Variables
let currentIndex = 0;
const slideCount = document.querySelectorAll(".slides img").length;
const slideWidth = 800;
let autoPlayInterval;

// Move to Next Slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

// Move to Previous Slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Update Slider Position
function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Start Auto Play
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

// Stop Auto Play
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
  startAutoPlay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
  startAutoPlay();
});

// Pause Auto Play on Hover
slider.addEventListener("mouseenter", stopAutoPlay);

// Resume Auto Play on Mouse Leave
slider.addEventListener("mouseleave", startAutoPlay);

startAutoPlay();

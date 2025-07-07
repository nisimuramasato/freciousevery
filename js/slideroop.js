let slideIndex = 0;
const slides = document.querySelectorAll(".slide-image");

function showSlides() {
  slides.forEach((img) => (img.style.display = "none"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 5000);
}

// 最初の画像だけ表示 & スタート
if (slides.length > 0) {
  slides[0].style.display = "block";
  setTimeout(showSlides, 5000);
}
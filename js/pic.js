let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-image");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // 4秒ごとに切り替え
}

// 初期表示開始
showSlides();
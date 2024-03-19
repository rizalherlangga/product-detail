let currentSlideIndex = 0;

document.querySelector('.next').addEventListener('click', function() {
  const slides = document.querySelector('.slides');
  
  
  // Salin slide pertama dan sisipkan ke akhir
  const cloneFirstSlide = slides.firstElementChild.cloneNode(true);
  slides.appendChild(cloneFirstSlide);
  
  // Geser slide ke kiri dengan mengatur transformasi sejauh satu slide
  slides.style.transition = "none";
  slides.style.transform = `translateX(-${100 * (currentSlideIndex + 1)}%)`;
  
  // Trigger reflow agar transformasi diterapkan dengan segera
  slides.offsetHeight;
  
  // Terapkan transisi kembali
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${100 * (currentSlideIndex + 2)}%)`;
  
  // Update indeks slide yang sedang ditampilkan
  currentSlideIndex++;
});

document.querySelector('.prev').addEventListener('click', function() {
  const slides = document.querySelector('.slides');
  
  
  // Salin slide terakhir dan sisipkan ke awal
  const cloneLastSlide = slides.lastElementChild.cloneNode(true);
  slides.insertBefore(cloneLastSlide, slides.firstElementChild);
  
  // Geser slide ke kanan dengan mengatur transformasi sejauh satu slide
  slides.style.transition = "none";
  slides.style.transform = `translateX(-${100 * currentSlideIndex}%)`;
  
  // Trigger reflow agar transformasi diterapkan dengan segera
  slides.offsetHeight;
  
  // Terapkan transisi kembali
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${100 * (currentSlideIndex + 1)}%)`;
  
  // Update indeks slide yang sedang ditampilkan
  currentSlideIndex--;
});

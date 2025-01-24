const botton = document.querySelector('.botton');

botton.addEventListener('click', function () {
    this.classList.toggle('selected');
});


function confirmDownload(fileUrl) {
  const userConfirmed = confirm("Wil je dit wordbestand downloaden?");
  if (userConfirmed) {
    window.location.href = fileUrl;
  }
}

// let currentIndex = 0;

// function moveSlide(direction) {
//   const slides = document.querySelectorAll('.carousel-item');
//   const totalSlides = slides.length;
  
//   // Update the current index
//   currentIndex += direction;

//   // Loop the carousel
//   if (currentIndex < 0) {
//     currentIndex = totalSlides - 1;
//   } else if (currentIndex >= totalSlides) {
//     currentIndex = 0;
//   }

//   // Move the carousel
//   const carousel = document.querySelector('.carousel');
//   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }


// <section id="carousel">
// <div class="carousel-container">
//   <div class="carousel">
//     <img src="1.PNG" alt="Image 1" class="carousel-item">
//     <img src="2.PNG" alt="Image 2" class="carousel-item">
//     <img src="3.PNG" alt="Image 3" class="carousel-item">
//     <img src="4.PNG" alt="Image 4" class="carousel-item">
//     <!-- Add more images as needed -->
//   </div>
//   <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
//   <button class="next" onclick="moveSlide(1)">&#10095;</button>
// </div>
// </section>

// /* carrousel */

// #carousel .carousel-container {
// 	position: relative;
// 	max-width: 60%;
// 	margin: 0 auto;
// 	overflow: hidden;
//   }
  
// #carousel .carousel {
// 	display: flex;
// 	transition: transform 0.5s ease;
//   }
  
// #carousel .carousel-item {
// 	min-width: 100%;
// 	object-fit: cover;
//   }
  
//   button {
// 	position: absolute;
// 	top: 50%;
// 	background-color: rgba(0, 0, 0, 0.5);
// 	color: white;
// 	border: none;
// 	padding: 10px;
// 	cursor: pointer;
// 	z-index: 10;
// 	transform: translateY(-50%);
//   }
  
//   .prev {
// 	left: 10px;
//   }
  
//   .next {
// 	right: 10px;
//   }
  
//   button:hover {
// 	background-color: rgba(0, 0, 0, 0.8);
//   }

// /* End carrousel */
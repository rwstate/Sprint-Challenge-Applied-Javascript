/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  let carousel = document.createElement("div");
  let leftButt = document.createElement("div");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let img4 = document.createElement("img");
  let rightButt = document.createElement("div");

  carousel.classList.add("carousel");
  leftButt.classList.add("left-button");
  rightButt.classList.add("right-button");

  leftButt.textContent = " < ";
  rightButt.textContent = " > ";
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  let images = [img1, img2, img3, img4]
  img1.style.display = "block"
  let index = 0

  leftButt.addEventListener("click", e => {
    images[index].style.display = "none"
    index -= 1
    if (index < 0) {
      index = 3
    }
    images[index].style.display = "block"
  })

  rightButt.addEventListener("click", e => {
    images[index].style.display = "none"
    index += 1
    if (index > 3) {
      index = 0
    }
    images[index].style.display = "block"
  })

  carousel.appendChild(leftButt);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButt);

  return carousel
}

let carouselCont = document.querySelector(".carousel-container");

carouselCont.appendChild(Carousel())


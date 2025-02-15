navlink = document.querySelector(".navlinks").querySelectorAll("a");
console.log(navlink);

navlink.forEach((element) => {
  element.addEventListener("click", function () {
    navlink.forEach((navlink) => navlink.classList.remove("active"));
    this.classList.add("active");
  });
});

const bar = document.querySelector(".hamburger");
const nav = document.querySelector(".navlinks");
const contact = document.querySelector(".navcontact");
bar.addEventListener("click", () => {
  console.log(nav);
  nav.classList.toggle("active");
  contact.classList.toggle("active");
});

{
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  function moveCarousel() {
    document.querySelector(
      ".section6-carousel"
    ).style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to the next item
  function nextItem() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    moveCarousel();
  }

  // Move to the previous item
  function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
    moveCarousel();
  }

  // Auto move carousel every 3 seconds
  setInterval(nextItem, 3000);

  // Add event listeners to buttons
  document.querySelector(".next-btn").addEventListener("click", nextItem);

  document.querySelector(".next-btn1").addEventListener("click", nextItem);
  document.querySelector(".prev-btn").addEventListener("click", prevItem);
}
{
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item1");
  const totalItems = items.length;

  function moveCarousel() {
    document.querySelector(
      ".section6-carousel1"
    ).style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to the next item
  function nextItem() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    moveCarousel();
  }

  // Move to the previous item
  function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
    moveCarousel();
  }

  // Auto move carousel every 3 seconds
  setInterval(nextItem, 3000);

  // Add event listeners to buttons
  document.querySelector(".next-btn").addEventListener("click", nextItem);
  document.querySelector(".prev-btn").addEventListener("click", prevItem);
}

// section 1
let index = 0;

function moveSlide(direction) {
  const images = document.querySelectorAll(".carousel-images img");
  index += direction;

  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  const newTransformValue = -index * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${newTransformValue}%)`;
}
setInterval(() => {
  moveSlide(1);
}, 3000);

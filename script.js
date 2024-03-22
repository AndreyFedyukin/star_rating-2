const colors = [
  "#ffffff",
  "#ff0000",
  "#ff6347",
  "#12ed19",
  "#ffa500",
  "#ffd700",
];
const ratingText = ["Ужасный", "Плохой", "Нормальный", "Хороший", "Отличный"];

const starsEl = document.querySelectorAll(".star");
const rootEl = document.querySelector(":root");
const ratingTextEl = document.querySelector("#rating-text");
const ratingStarsEl = document.querySelector("#rating-stars");

starsEl.forEach((star, index) => {
  star.addEventListener("click", () => highlightStar(index));
});

function highlightStar(index) {
  starsEl.forEach((star, idx) => {
    if (idx <= index) {
      star.classList.add("is-selected");
    } else {
      star.classList.remove("is-selected");
    }
  });

  const selectedStars = document.querySelectorAll(".is-selected");
  const color = colors[selectedStars.length];

  selectedStars.forEach((star, idx) => {
    rootEl.style.setProperty(`--star${idx + 1}`, color);
  });

  ratingTextEl.innerText = `${ratingText[selectedStars.length - 1]}`;

  if (selectedStars.length === 1) {
    ratingStarsEl.innerText = `${selectedStars.length} звезда`;
  } else {
    ratingStarsEl.innerText = `${selectedStars.length} звёзды`;
  }
  if (selectedStars.length === 5) {
    ratingStarsEl.innerText = `${selectedStars.length} звёзд`;
  }
}

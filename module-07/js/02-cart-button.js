/**
 * Після кожного кліку на `.js-cart` збільшуй число всередині `span` на один.
 * Перевірка: 1 клік → 1; 2 кліки → 2; без кліків → 0.
 */

// Додай слухач і обробник події.
const btnCart = document.querySelector(".js-cart");
const cartSpan = document.querySelector(".js-cart span");

let counter = 0;

btnCart.addEventListener("click", (e) => {
  console.log("target:", e.target);
  console.log("currentTarget:", e.currentTarget);
  //   cartSpan.textContent++;
  counter += 1;
  cartSpan.textContent = counter;
});

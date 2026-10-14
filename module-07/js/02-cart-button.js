/**
 * Після кожного кліку на `.js-cart` збільшуй число всередині `span` на один.
 * Перевірка: 1 клік → 1; 2 кліки → 2; без кліків → 0.
 */
const cartButtonEl = document.querySelector('.js-cart');
const countEl = cartButtonEl.querySelector('span');

// Додай слухач і обробник події.

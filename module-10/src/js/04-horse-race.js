const horses = [
  { id: 1, name: 'Блискавка' },
  { id: 2, name: 'Комета' },
  { id: 3, name: 'Вітер' },
];

const betSelectEl = document.querySelector('.js-bet-select');
const raceButtonEl = document.querySelector('.js-race-button');
const raceStatusEl = document.querySelector('.js-race-status');
const raceResultEl = document.querySelector('.js-race-result');

/**
 * Створіть прості кінні перегони.
 *
 * 1. Заповніть select варіантами з масиву horses.
 * 2. Створіть runHorse(horse), яка повертає проміс. Кінь має фінішувати
 *    через випадковий час від 1 до 4 секунд, а проміс — виконатися з horse.
 * 3. Після натискання кнопки запустіть усіх коней одночасно.
 * 4. Через Promise.race() визначте переможця та порівняйте його id зі ставкою.
 * 5. Покажіть ім’я переможця й повідомте, чи зіграла ставка.
 * 6. Через Promise.all() дочекайтеся всіх коней, покажіть «Заїзд завершено»
 *    та знову зробіть кнопку активною.
 */

function runHorse(horse) {
  // Створіть випадкову затримку та поверніть проміс.
}

// Створіть варіанти select і додайте обробник запуску перегонів.

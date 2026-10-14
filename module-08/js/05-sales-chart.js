/**
 * Задача 5. Інтерактивний графік продажів із Chart.js
 *
 * Підключи Chart.js в index.html через CDN.
 * Масиви sales змінювати не потрібно.
 *
 * Базова робота бібліотеки
 * 1. Створи `new Chart(canvasEl, config)`: type "bar",
 *    labels, один dataset із назвою "Кількість продажів", values і кольором
 *    "#36a2eb". Для осі y встанови beginAtZero: true.
 *
 * Додавання даних з колекції та їх зміна.
 * 1. Реалізуй getChartData(period). Через map() і деструктуризацію створи
 *    масиви labels та values із sales[period] і поверни { labels, values }.
 * 2. Для period "week" створи `new Chart(canvasEl, config)`: type "bar",
 *    labels, один dataset із назвою "Кількість продажів", values і кольором
 *    "#36a2eb". Для осі y встанови beginAtZero: true.
 * 3. Одним click-обробником periodsEl перемикай період за data-period.
 *    Онови salesChart.data.labels, salesChart.data.datasets[0].data набору й виклич salesChart.update().
 * 4. Перенеси клас is-active на вибрану кнопку та покажи в summaryEl
 *    "Продажів за період: N".
 * 5. Створи функцію calcTotal(values) яка буде підраховувати суму value і виводити значення
 * в .js-chart-summary в форматі `Продажів за період: [сума]`
 *
 * Перевірка: тиждень показує 5 стовпчиків і суму 76; місяць — 4 стовпчики
 * і суму 356; клік між кнопками нічого не змінює.
 */

const sales = {
  week: [
    { label: 'Пн', value: 12 },
    { label: 'Вт', value: 19 },
    { label: 'Ср', value: 8 },
    { label: 'Чт', value: 15 },
    { label: 'Пт', value: 22 },
  ],
  month: [
    { label: '1 тиждень', value: 74 },
    { label: '2 тиждень', value: 91 },
    { label: '3 тиждень', value: 83 },
    { label: '4 тиждень', value: 108 },
  ],
};

const periodsEl = document.querySelector('.js-periods');
const canvasEl = document.querySelector('#sales-chart');
const summaryEl = document.querySelector('.js-chart-summary');

// Створи діаграму, початковий підсумок і делегований обробник.

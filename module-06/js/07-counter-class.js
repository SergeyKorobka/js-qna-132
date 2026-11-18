/**
 * Створіть клас Counter.
 * Конструктор отримує початкове значення value.
 * Метод increment збільшує value на 1, decrement зменшує на 1,
 * а getValue повертає поточне значення.
 */
class Counter {
  // Ваш код тут
  constructor(value) {
    this.value = value;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  getValue() {
    return this.value;
  }
}

const counter = new Counter(5);
// console.log(counter);
counter.increment();
counter.decrement();
// console.log(counter.getValue()); // 5

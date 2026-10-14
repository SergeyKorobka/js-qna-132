/**
 * Задача 4. Банківський рахунок
 *
 * Допиши методи account:
 * deposit(amount) додає amount до balance;
 * withdraw(amount) списує кошти, лише якщо їх достатньо, і повертає true;
 * за недостатнього балансу withdraw повертає false без зміни balance;
 * getBalance() повертає поточний баланс.
 * Усередині методів звертайся до об’єкта через this.
 */
const account = {
  balance: 1000,
  deposit(amount) {},
  withdraw(amount) {},
  getBalance() {},
};
account.deposit(500);
console.log(account.withdraw(1200)); // true
console.log(account.getBalance()); // 300
console.log(account.withdraw(500)); // false

const cart = {
  items: [
    { name: "Навушники", price: 1200 },
    { name: "Чохол", price: 350 },
    { name: "Кабель", price: 180 },
  ],

  /**
   * Доповніть метод getTotal так, щоб він повертав суму цін усіх товарів.
   * Для доступу до масиву товарів використайте this.
   */
  getTotal() {
    // Ваш код тут
    // 1
    // let total = 0;
    // for (const item of this.items) {
    //   total += item.price;
    // }
    // return total;

    // 2
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

// console.log(cart.getTotal()); // 1730

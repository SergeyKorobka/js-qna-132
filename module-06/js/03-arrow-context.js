const user = {
  name: "Олена",

  /**
   * Доповніть createGreeting. Метод має повертати стрілкову функцію,
   * яка повертає рядок "Привіт, Олена!". Використайте this.name.
   */
  createGreeting() {
    // Ваш код тут
    // 1
    // const greet = () => `Привіт, ${this.name}`;
    // return greet;
    // 2
    return () => `Привіт, ${this.name}!`;
  },
};

const greetUser = user.createGreeting();
// console.log(greetUser()); // "Привіт, Олена!"

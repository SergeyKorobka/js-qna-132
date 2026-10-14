// extends створює клас-нащадок, а super викликає конструктор батьківського класу.

class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Користувач: ${this.name}`;
  }
}

/**
 * Створіть клас PremiumUser, який успадковується від User.
 * Конструктор отримує name і plan, а getInfo повертає рядок
 * "Користувач: Ім'я, план: План".
 */
class PremiumUser extends User {
  // Ваш код тут
}

// const user = new PremiumUser('Марія', 'Pro');
// console.log(user.getInfo()); // "Користувач: Марія, план: Pro"

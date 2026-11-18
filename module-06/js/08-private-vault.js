/**
 * Створіть клас Vault з приватною властивістю #pin.
 * Конструктор отримує pin. Метод checkPin повертає true, якщо переданий
 * код збігається зі збереженим. Метод changePin змінює код лише тоді,
 * коли поточний код правильний і новий код містить рівно 4 символи.
 */
class Vault {
  // Ваш код тут
  #pin;

  constructor(pin) {
    this.#pin = pin;
  }

  #isValidPin(pin) {
    return typeof pin === "string" && pin.length === 4;
  }

  checkPin(pin) {
    return this.#pin === pin;
  }

  changePin(oldPin, newPin) {
    // if (oldPin === this.#pin && newPin.length === 4) {
    if (this.checkPin(oldPin) && this.#isValidPin(newPin)) {
      this.#pin = newPin;
      return true;
    }
    return false;
  }
}

const vault = new Vault("4826");
// console.log(vault.checkPin("4826")); // true
// console.log(vault.changePin("4826", "1111")); // true
// console.log(vault.changePin("4826", "1111")); // false
// console.log(vault.checkPin("1111")); // true

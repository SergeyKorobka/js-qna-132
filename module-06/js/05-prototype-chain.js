// Object.create створює об'єкт, який успадковує властивості іншого об'єкта.

const vehicle = {
  category: "Транспорт",
  getCategory() {
    return this.category;
  },
};
// console.log(vehicle);

/**
 * Створіть об'єкт electricScooter на основі vehicle.
 * Додайте йому власну властивість model зі значенням 'Volt X2'.
 * Не копіюйте метод getCategory — він має бути знайдений у прототипі.
 */
const electricScooter = Object.create(vehicle);
electricScooter.model = "Volt X2";

// console.log(electricScooter);
// console.log(electricScooter.model); // 'Volt X2'
// console.log(electricScooter.getCategory()); // 'Транспорт'
// console.log(Object.hasOwn(electricScooter, "getCategory")); // false

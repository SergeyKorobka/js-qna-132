/**
 * Викличте функцію та перегляньте значення this у консолі.
 * Порівняйте його зі значенням this у коді поза функцією.
 */
function showContext() {
  console.log("this у функції:", this);
}

// console.log("this у модулі:", this);
// showContext();

const obj = {
  name: "qwe",
  showThis() {
    console.log("this in obj:", this);
  },
};

// obj.showThis();

const foo = obj.showThis;
// foo();

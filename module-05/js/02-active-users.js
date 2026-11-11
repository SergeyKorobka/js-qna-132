/**
 * Задача 2. Активні користувачі
 *
 * Реалізуй getActiveEmails(users): спочатку відфільтруй об’єкти з isActive: true,
 * потім перетвори результат на масив email. Поверни новий масив і не змінюй users.
 */
const users = [
  { name: 'Олена', email: 'olena@mail.com', isActive: true },
  { name: 'Ігор', email: 'ihor@mail.com', isActive: false },
  { name: 'Анна', email: 'anna@mail.com', isActive: true },
];

// const getActiveEmails = users => {
//   const activeUsers = users.filter(user => user.isActive);
//   return activeUsers.map(user => user.email);
//   // Реалізація
// };

const getActiveEmails = users => users
  .filter(user => user.isActive)
  .map(user => user.email);
  
// Реалізація
console.log(getActiveEmails(users)); // ["olena@mail.com", "anna@mail.com"]

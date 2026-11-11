/**
 * Задача 3. Перевірка команди
 *
 * findMemberByEmail повертає учасника із заданою поштою або undefined.
 * canStartProject повертає true, якщо кожен учасник активний і хоча б один
 * має роль "lead".
 */
const team = [
  { email: 'lead@mail.com', role: 'lead', isActive: true },
  { email: 'dev@mail.com', role: 'developer', isActive: true },
  { email: 'qa@mail.com', role: 'qa', isActive: true },
];

const findMemberByEmail = (members, email) =>
  members.find(member => member.email === email);
const canStartProject = members =>
  members.every(member => member.isActive) &&
  members.some(member => member.role === 'lead');

console.log(findMemberByEmail(team, 'dev@mail.com'));
console.log(canStartProject(team)); // true

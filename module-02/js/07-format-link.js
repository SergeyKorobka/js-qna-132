/**
 * Задача 7. Форматування посилання
 *
 * Реалізуй formatProfileLink(link).
 * - Видали зовнішні пробіли.
 * - Перетвори рядок на нижній регістр.
 * - Якщо рядок починається з "http://", заміни цей початок на "https://"
 *   за допомогою slice().
 * - Якщо посилання не закінчується символом "/", додай його.
 * - Поверни готовий рядок.
 */
function formatProfileLink(link) {
  // Нормалізуй і поверни посилання.
  const trimmedLink = link.trim();
  let normalizedLink = trimmedLink.toLowerCase();

  if (normalizedLink.startsWith('http://')) {
    normalizedLink = 'https://' + normalizedLink.slice(7);
  }

  if (!normalizedLink.endsWith('/')) {
    normalizedLink += '/';
  }

  return normalizedLink;
}

console.log(formatProfileLink('  HTTP://My-Site.com/Profile  '));
console.log(formatProfileLink('https://example.com/user/'));

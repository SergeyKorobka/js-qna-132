// Клас описує шаблон, за яким можна створювати однотипні об'єкти.

/**
 * Створіть клас Book. Його конструктор отримує об'єкт з title та author
 * і зберігає ці значення у властивостях екземпляра.
 */
class Book {
  constructor(params) {
    this.title = params.title;
    this.author = params.author;
  }
}

const book = new Book({ title: "Місто", author: "Валер’ян Підмогильний" });
// console.log(book);
// console.log(book.title); // 'Місто'
// console.log(book.author); // 'Валер’ян Підмогильний'

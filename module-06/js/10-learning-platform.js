class Course {
  constructor(title, lessons) {
    this.title = title;
    this.lessons = lessons;
  }

  getInfo() {
    return `${this.title}: ${this.lessons} уроків`;
  }
}

/**
 * Створіть клас OnlineCourse, який успадковується від Course.
 * Конструктор отримує title, lessons і platform.
 * Додайте метод start, який повертає рядок
 * "Курс Назва запущено на Platform".
 * Перевизначте getInfo, щоб додати до базової інформації платформу.
 */
class OnlineCourse extends Course {
  // Ваш код тут
}

// const course = new OnlineCourse('JavaScript', 12, 'Meet');
// console.log(course.getInfo()); // 'JavaScript: 12 уроків, платформа: Meet'
// console.log(course.start()); // 'Курс JavaScript запущено на Meet'

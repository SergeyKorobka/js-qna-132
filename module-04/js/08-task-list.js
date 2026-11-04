/** Задача 8. Список справ.
 * Допиши taskList.add(text), complete(index) і
 * getPending().
 * add додає {text,done:false};
 * complete змінює done на true по індексу;
 * getPending повертає тексти незавершених справ.
 *
 * Перевірка: після завершення першої
 * справи повертається лише друга. */

const taskList = {
  tasks: [],

  add(text) {
    this.tasks.push({ text, done: false });
  },

  complete(index) {
    this.tasks[index].done = true;
  },

  getPending() {
    const newArr = [];
    for (const task of this.tasks) {
      if (!task.done) {
        newArr.push(task.text);
      }
    }

    return newArr;
  },
};

taskList.add('Попити каву');
taskList.add('Помити посуд');
taskList.add('Поприбирати');
console.log(taskList.tasks);
taskList.complete(0);
console.log(taskList.tasks);
console.log(taskList.getPending());

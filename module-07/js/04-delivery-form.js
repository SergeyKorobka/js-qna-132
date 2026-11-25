const formEl = document.querySelector(".js-delivery-form");
const summaryEl = document.querySelector(".js-summary");

/**
 * На submit скасуй перезавантаження
 * отримай дані з полів `name` і `city`
 * створи об'єкт із властивостями `name` і `city`
 * в `.js-summary` використовуючи дані з обʼєкту, покажи "Одержувач: <name>, місто: <city>".
 * Перевірка: "Оля" + "Київ" → відповідний текст; інше місто працює; сторінка не перезавантажується.
 */

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(e.target.elements);
  //   1. Перевірка на пусті поля

  const formData = new FormData(e.target);
  const info = {
    name: formData.get("name"),
    city: formData.get("city"),
  };

  summaryEl.textContent = `Одержувач: ${info.name}, місто: ${info.city}`;
  //   2. Очистити форму
  e.target.reset();
});

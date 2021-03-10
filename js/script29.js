// 1. Завдання - створити модальне вікно, щоб закривалось, коли наживаємо на Х, 'close', 'save changes' і на поле поза вікном.
// const saveChanges = document.querySelector('.onclickCloseModal');
// const modalWindow = document.getElementById('exampleModal');
// const modalContent = document.querySelector('.modal-content');

//Помилка в коді - script29.js:5 Uncaught TypeError: Cannot read property 'addEventListener' of null at script29.js:5
//
// saveChanges.addEventListener('click', function () {
//     if (modalWindow.contains('show')) {
//         modalWindow.remove('show')
//     };
//     if (modalContent.contains('show')) {
//         modalContent.remove('show')
//     }
// });
// Завдання було вирішино, додавши клас Bootstrap (data-bs-dismiss="modal") до кнопки onclickCloseModal.

//2.Navigation. Реалізувати навігаційну панель Навігаційну панель з фреймворку Bootstrap
//-По кліку на навігаційний елемент заборонити перехід на зовнішні сторінки.
//-По кліку на навігаційний елемент роботи його активним (шрифт повинен бути зеленого кольору) решта елементів повинні мати колір за замовчуванням

const navLinks = document.querySelector(".nav-link");
const navList = document.querySelector('.nav-item');
const activeLink = document.querySelector('.active');
const linkActive = document.querySelector('.text-success');
let isVisible = true;


navLinks.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('You are not allowed to visit this page');
});

// function linksVisibility() {
//     if (isVisible) {
//         navLinks.contains(linkActive)
//     } else {
//         navLinks.remove(linkActive)
//     };
// };
// navLinks.addEventListener('click', linksVisibility);

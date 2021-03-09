//1. 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" },
];
// Перший спосіб
// const listItems = [];
// const listContainer = document.getElementById("listContainer");
// playList.forEach(element => listItems.push("<li>" + JSON.stringify(element) + "</li>"));

// listContainer.innerHTML = listItems.join('');

// Другий спосіб
const trackMusicList = document.getElementById('trackMusicList');
const oderedList = document.createElement('ol');

playList.forEach((list) => {
    const listItem = document.createElement('li');
    oderedList.appendChild(listItem);
    const text = document.createTextNode('author: ' + list.author + ', ' + 'song: ' + list.song);
    listItem.appendChild(text);
});

trackMusicList.appendChild(oderedList);

//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
const popup = document.getElementById('popup');
const openModal = document.querySelector('.popup-open');
const closeModal = document.querySelector('.popup-close');

openModal.onclick = function (e) {
    e.preventDefault();
    popup.style.visibility = 'visible';
};

closeModal.onclick = function () {
    popup.style.visibility = 'hidden';
};

//3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
//Дороблю пізніше


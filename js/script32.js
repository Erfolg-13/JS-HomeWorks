console.log('Lesson32');

const form = document.querySelector('.form');
const result = document.querySelector('#result');
const consoleContainer = document.querySelector('.console');

const showFavourite = document.createElement('button');
showFavourite.className = "showFavBTN";
showFavourite.textContent = "Show the favourite list item";

function createMovie(title, lintToPoster, year, imdbID) {
    const titleFilm = document.createElement('h2');
    const textTitle = document.createTextNode(title);
    titleFilm.appendChild(textTitle);

    const titleId = document.createElement('p');
    const textId = document.createTextNode('ID: ' + imdbID);
    titleId.appendChild(textId);

    const poster = document.createElement('img');
    poster.src = lintToPoster;
    poster.alt = title;
    const yeaR = document.createElement('p');
    const textYear = document.createTextNode('Year: ' + year);
    yeaR.appendChild(textYear);
    const hr = document.createElement('hr');

    const addToFavourite = document.createElement('button');
    addToFavourite.className = "addToFavBTN";
    addToFavourite.textContent = "Add to favourite movies";

    addToFavourite.addEventListener('click', () => {
        const storageFavMovie = window.localStorage.getItem('Movie ID');
        const storageDataId = JSON.parse(storageFavMovie);
        const idFromFavList = JSON.stringify(imdbID);
        storageDataId.push(idFromFavList);
        const storageFavItems = JSON.stringify(storageDataId);
        window.localStorage.setItem(storageFavMovie, storageFavItems);
    })

    // addToFavourite.addEventListener('click', () => {
    //     const idValue = JSON.stringify(imdbID);
    //     window.localStorage.setItem('Movie ID', idValue);
    //     const storedFavMovie = window.localStorage.getItem('Movie ID');
    //     result.appendChild(showFavourite);
    //     console.log('ID movie: ' + storedFavMovie);
    // });
    
    const movieSection = document.createElement('section');
    movieSection.className = "result-data";
    movieSection.appendChild(titleFilm);
    movieSection.appendChild(poster);
    movieSection.appendChild(yeaR);
    movieSection.appendChild(addToFavourite);
    movieSection.appendChild(hr);
    return movieSection;
}

showFavourite.addEventListener('click', () => {
    const printFavList = window.localStorage.getItem('Movie ID');
    consoleContainer.innerText = 'ID movie: ' + printFavList + ';';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#s').value;
    const type = document.querySelector('#type').value;

    fetch(`http://www.omdbapi.com/?apikey=7ee86f7e&s=${name}&type=${type}`)
        .then((response) => response.json())
        .then((data) => {
            data.Search.forEach((movie) => {
                const createMovieItem = createMovie(movie.Title, movie.Poster, movie.Year, movie.imdbID);
                result.appendChild(createMovieItem);
            });
        });
    console.log({ name, type});
});





console.log('Lesson32');
const form = document.querySelector('.form');
const result = document.querySelector('#result');

{/* <section>
<h2>Name</h2>
 <img src="./" alt="Poster">
 <p>Year XXX</p>
 <hr> 
    </section> */}

function createMovie(title, lintToPoster, year) {
    const titleFilm = document.createElement('h2');
    const textTitle = document.createTextNode(title);
    titleFilm.appendChild(textTitle);

    const poster = document.createElement('img');
    poster.src = lintToPoster;
    poster.alt = title;
    const yeaR = document.createElement('p');
    const textYear = document.createTextNode(year);
    yeaR.appendChild(textYear);
    const hr = document.createElement('hr');
    const movieSection = document.createElement('section');
    movieSection.appendChild(titleFilm);
    movieSection.appendChild(poster);
    movieSection.appendChild(yeaR);
    movieSection.appendChild(hr);
    return movieSection;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#s').value;
    const type = document.querySelector('#type').value;

    fetch(`http://www.omdbapi.com/?apikey=7ee86f7e&s=${name}&type=${type}`)
        .then((response) => response.json())
        .then((data) => {
            data.Search.forEach((movie) => {
                const createMovieItem = createMovie(movie.Title, movie.Poster, movie.Year);
                result.appendChild(createMovieItem);
            });
        });
    console.log({ name, type });
});



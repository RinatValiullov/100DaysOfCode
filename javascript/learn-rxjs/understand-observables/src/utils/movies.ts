import { fromEvent, pipe } from "rxjs";
import { map, filter } from "rxjs/operators";


const getMovies = () => {

  const output = document.querySelector('.output');
  const getBtn = document.querySelector('.get');

  interface Movie {
    title: string;
  }

  const click$ = fromEvent(getBtn, 'click');

  const moviesUrl = "./movies.json";

  const load = (url: string) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status !== 200) {
        console.error("Something went wrong", xhr.statusText);
      } else {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach((movie: Movie) => {
          const div = document.createElement('DIV');
          div.innerText = movie.title;
          output.appendChild(div);
        });
      }
    });

    xhr.open("GET", url);

    xhr.send(null);

  };

  click$.subscribe({
    next: (value) => load(moviesUrl),
    error: err => console.error(err),
    complete: () => console.log('Complete'),
  })

};


export { getMovies };

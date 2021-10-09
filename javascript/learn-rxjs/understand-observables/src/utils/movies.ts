import { fromEvent, Observable, pipe } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Movie } from "./Movie";


const getMovies = () => {

  const output = document.querySelector('.output');
  const getBtn = document.querySelector('.get');

  const moviesUrl = "./movies.json";

  const renderMovies = (movies) => {
    movies.forEach((movie: Movie) => {
      const div = document.createElement('DIV');
      div.innerText = movie.title;
      output.appendChild(div);
    });
  };

  const click$ = fromEvent(getBtn, 'click');

  const load = (url: string) => {

    return new Observable(subscriber => {

      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status !== 200) {
          console.error("Something went wrong", xhr.statusText);
        } else {
          const data = JSON.parse(xhr.responseText);
          subscriber.next(data);
          subscriber.complete();
        }
      });

      xhr.open("GET", url);

      xhr.send(null);

    });

  };

  const getMovies = click$.pipe(
    mergeMap(e => load(moviesUrl))
  );

  const click$Observer = {
    next: (value) => renderMovies(value),
    error: err => console.error(err),
    complete: () => console.log('Complete'),
  };

  getMovies.subscribe(click$Observer);

};


export { getMovies };

import { fromEvent, Observable } from "rxjs";
import { mergeMap, mergeWith } from "rxjs/operators";
import { Movie } from "./Movie";
import { load, loadWithFetch } from "./loader";
import { catchErrors } from './catchErrors';


const getMovies = () => {

  catchErrors();

  // const output = document.querySelector('.output');
  // const getBtn = document.querySelector('.get');

  // const moviesUrl = "./movies.json";

  // const renderMovies = (movies) => {
  //   movies.forEach((movie: Movie) => {
  //     const div = document.createElement('DIV');
  //     div.innerText = movie.title;
  //     output.appendChild(div);
  //   });
  // };

  // const click$ = fromEvent(getBtn, 'click');

  // const getMovies = click$.pipe(
  //   mergeMap(e => loadWithFetch(moviesUrl))
  // );

  // // loadWithFetch(moviesUrl).subscribe(renderMovies)

  // const click$Observer = {
  //   next: (value) => renderMovies(value),
  //   error: err => console.error(`Error: ${err}`),
  //   complete: () => console.log('Complete'),
  // };

  // getMovies.subscribe(click$Observer);

};


export { getMovies };

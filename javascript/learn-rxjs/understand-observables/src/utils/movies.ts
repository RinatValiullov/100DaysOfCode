import { fromEvent, Observable, from, defer } from "rxjs";
import { mergeMap, retryWhen, delay, scan, takeWhile } from "rxjs/operators";
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

  const retryStrategy = ({ attempts = 3, delayTime = 3000 }) => {
    return (errors) => {
      return errors.pipe(
        scan((acc, value) => {
          console.log(acc, value);
          return acc + 1;
        }, 0),
        takeWhile(acc => acc < attempts),
        delay(delayTime)
      );
    }
  };

  const click$ = fromEvent(getBtn, 'click');

  // with `XMLHttpRequest`
  const load = (url: string) => {

    return new Observable(subscriber => {

      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status !== 200) {
          subscriber.error(xhr.statusText);
        } else {
          const data = JSON.parse(xhr.responseText);
          subscriber.next(data);
          subscriber.complete();
        }
      });

      xhr.open("GET", url);

      xhr.send(null);

    }).pipe(retryWhen(retryStrategy({ attempts: 4, delayTime: 1000 })));

  };

  // with `fetch`
  const loadWithFetch = (url: string) => {

    return defer(() => {
      return from(
        fetch(url).then(response => response.json())
      );
    });

  };

  const getMovies = click$.pipe(
    mergeMap(e => loadWithFetch(moviesUrl))
  );

  // loadWithFetch(moviesUrl).subscribe(renderMovies)

  const click$Observer = {
    next: (value) => renderMovies(value),
    error: err => console.error(`Error: ${err}`),
    complete: () => console.log('Complete'),
  };

  getMovies.subscribe(click$Observer);

};


export { getMovies };

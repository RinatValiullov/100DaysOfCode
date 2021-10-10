import { Observable, from, defer } from 'rxjs';
import { scan, takeWhile, delay, retryWhen } from 'rxjs/operators';

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

// with `XMLHttpRequest`
export const load = (url: string) => {

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
export const loadWithFetch = (url: string) => {

  return defer(() => {
    return from(
      fetch(url).then(response => response.json())
    );
  });

};

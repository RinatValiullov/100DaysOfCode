import { fromEvent, of, from, throwError } from "rxjs";
import { mergeWith, onErrorResumeNext, map, catchError } from "rxjs/operators";

export const catchErrors = () => {

  let source1 = of(1);
  let sourceArr = from([2, 3, 4]);
  let source5 = of(5);

  let source$ = fromEvent(document, 'click');

  source$.pipe(
    mergeWith(
      source1,
      sourceArr,
      throwError(() => new Error('Stop!')),
      source5
    ),
    catchError(err => {
      console.log(`Caught: ${err}`);
      return of('catchError operator');
    })
  ).subscribe({
    next: value => console.log(`value: ${value}`),
    error: err => console.error(`error: ${err}`),
    complete: () => console.log(`Complete!`),
  });

  /*
  // another example

  of(7, 8, 9).pipe(
    map(x => {
      if (x === 9) {
        throw Error('The number 9!');
      }
      return 10 / x;
    }),
    onErrorResumeNext(of(10, 11, 12))
  ).subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('Complete!')
  });

  */

}

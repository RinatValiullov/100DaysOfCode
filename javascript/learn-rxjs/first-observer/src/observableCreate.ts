import { Observable } from 'rxjs';


const nick = '4rontender';

let source$ = new Observable((observer) => {

  for (const letter of nick) {
    // we can handle errors such way
    /*
    if (letter === 'n') {
      observer.error('Something went wrong');
    }
    */
    observer.next(letter);
  }

  observer.complete();

});


source$.subscribe({
  next: value => console.log(`value: ${value}`),
  error: (error) => console.error(`error: ${error}`),
  complete: () => console.log(`complete`)
});

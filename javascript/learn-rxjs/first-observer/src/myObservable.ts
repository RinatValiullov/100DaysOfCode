import { Observable, Observer, fromEvent, pipe, interval, from } from 'rxjs';
import { scan, map, take } from 'rxjs/operators'

const numbers = [1, 5, 6]
let source$ = from(numbers);

class MyObserver implements Observer<number> {

  next(value) {
    console.log(`value: ${value}`)
  }

  error(err) {
    console.error(`error: ${err}`)
  }

  complete() {
    console.info(`complete`)
  }

}

source$.subscribe(new MyObserver())

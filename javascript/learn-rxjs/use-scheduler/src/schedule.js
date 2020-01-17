import { Observable, asyncScheduler, queueScheduler } from 'rxjs';
import { delay, observeOn } from 'rxjs/operators';

console.dir(queueScheduler);

const observable = new Observable(proxyObserver => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(observeOn(queueScheduler, 2000));

const finalObserver = {
  next(x) {
    console.log('got value', x);
  },
  error(err) {
    console.error('something went wrong', err);
  },
  complete() {
    console.log('done');
  }
};

console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');

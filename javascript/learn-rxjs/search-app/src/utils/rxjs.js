import { Observable } from "rxjs";

const search$ = new Observable((observer) => {
  console.log("Start in observable");
  observer.next(1);
  observer.next(2);
  observer.next(3);
  console.log("End in observable");
});

console.log("Start in subscribe");

console.log("End in subscribe");

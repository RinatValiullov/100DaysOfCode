import { Observable } from "rxjs";

const search$ = new Observable((observer) => {
  const search = document.querySelector("#search");

  if (!search) {
    observer.error("Element not found");
    return;
  }

  search.addEventListener("input", (event) => {
    observer.next(event.target.value);
    // observer.complete(); // After this method subscriber will not work
  });
});

// search$.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log(err);
//   },
//   complete: () => {
//     console.log("Event is done");
//   }
// });

const searchObserver = {
  next: (value) => console.log(value),
  error: (error) => console.log(error)
};

search$.subscribe(searchObserver);

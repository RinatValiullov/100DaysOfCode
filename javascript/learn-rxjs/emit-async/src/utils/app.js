import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

const init = () => {
  const nickName = "4rontender";

  const source$ = new Observable((observer) => {
    let index = 0;

    let showLetter = () => {
      observer.next(nickName[index++]);

      if (index < nickName.length) {
        setTimeout(showLetter, 1000);
      } else {
        observer.complete();
      }
    };

    showLetter();
  }).pipe(
    map((letter) => {
      if (letter === "4") {
        return "F";
      }
      return letter.toUpperCase();
    }),
    filter((letter) => letter.charCodeAt(0) > 80)
  );

  let source$Observer = {
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log("Done!")
  };

  source$.subscribe(source$Observer);
};

export { init };

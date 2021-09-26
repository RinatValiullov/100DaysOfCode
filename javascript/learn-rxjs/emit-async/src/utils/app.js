import { Observable } from "rxjs";

const init = () => {
  const nickName = "4rontender";

  const source$ = new Observable((observer) => {
    let index = 0;

    let showLetter = () => {
      observer.next(nickName[index++]);

      if (index < nickName.length) {
        setTimeout(showLetter, 1500);
      } else {
        observer.complete();
      }
    };

    showLetter();
  });

  let source$Observer = {
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log("Done!")
  };

  source$.subscribe(source$Observer);
};

export { init };

import { fromEvent, pipe } from "rxjs";
import { map } from "rxjs/operators";

const init = () => {
  let source$ = fromEvent(document, "mousemove");

  const cursorPosition = source$.pipe(
    map((event) => ({
      x: event.clientX,
      y: event.clientY
    }))
  );

  const source$Observer = {
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log("Complete")
  };

  cursorPosition.subscribe(source$Observer);
};

export { init };

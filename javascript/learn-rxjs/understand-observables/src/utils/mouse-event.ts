import { fromEvent, pipe } from "rxjs";
import { map, filter } from "rxjs/operators";

const init = () => {
  let source$ = fromEvent(document, "mousemove");

  const cursorPosition = source$.pipe(
    map((event: Event) => {
      return {
        x: (event as MouseEvent).clientX,
        y: (event as MouseEvent).clientY
      }
    }),
    filter(value => value.x < 500)
  );

  const source$Observer = {
    next: (value: { x: number, y: number }) => console.log(value),
    error: (err: string) => console.error(err),
    complete: () => console.log("Complete")
  };

  cursorPosition.subscribe(source$Observer);
};

export { init };

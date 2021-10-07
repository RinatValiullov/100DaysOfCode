import { fromEvent, pipe } from "rxjs";
import { map, filter } from "rxjs/operators";

const init = () => {
  let cursorPos = document.querySelector('.cursor-position') as HTMLDivElement;

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

  const onNext = (value: { x: number, y: number }) => {
    cursorPos.style.left = `${value.x}px`;
    cursorPos.style.top = `${value.y}px`;
  };

  const source$Observer = {
    next: onNext,
    error: (err: string) => console.error(err),
    complete: () => console.log("Complete")
  };

  cursorPosition.subscribe(source$Observer);
};

export { init };

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let isDraw = false;
let lastEvent = null;

let handleDown = (event) => {
  lastEvent = event;
  isDraw = true;
}

let handleMove = (event) => {
  if (isDraw) {
    // console.log(event.offsetX, event.offsetY);
    ctx.beginPath();
    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    ctx.lineTo(event.offsetX, event.offsetY);

    ctx.stroke();
    lastEvent = event;
  }
}

let handleUp = (event) => {
  isDraw = false;
}

let handleLeave = (event) => {
  isDraw = false;
}

canvas.addEventListener("mousedown", handleDown);
canvas.addEventListener("mousemove", handleMove);
canvas.addEventListener("mouseup", handleUp);
canvas.addEventListener("mouseleave", handleLeave);

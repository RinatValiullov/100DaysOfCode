const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((soundElement) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = soundElement;

  btn.addEventListener("click", () => {
    stopSound();
    document.querySelector(`#${soundElement}`).play();
  });

  document.body.appendChild(btn);
});

const stopSound = () => {
  sounds.forEach((soundElement) => {
    const sound = document.querySelector(`#${soundElement}`);
    sound.pause();
    sound.currentTime = 0;
  });
};

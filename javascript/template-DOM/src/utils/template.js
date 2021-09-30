import { CHAT_NAMES } from "./chat_names-mock.js";
import { GenerateTempl } from "./generateTempl";

const template = `
  <div class="{{ wrapperClassName }}">
    <ul class="{{ chatListClassName }}">
      {{ chatListItems }}
    </ul>

    <button class="chat__button" onclick="{{ handleClick }}">
      <span class="{{ buttonTextClassName }}">{{ buttonText }}</span>
    </button>
  </div>
`;

const handleClick = () => {
  const chat__list = document.querySelector("UL");
  const chat__item = document.createElement("LI");
  chat__item.textContent = "New item";
  chat__item.className = "chat__item";
  chat__list.appendChild(chat__item);

  console.log("item added");
};

const chatsTemplate = new GenerateTempl(template);

const chatsMarkup = chatsTemplate.compile({
  wrapperClassName: "wrapper__button",
  buttonTextClassName: "chat__text",
  buttonText: "Add chat",
  chatListClassName: "chat__list",
  chatListItems: CHAT_NAMES.map(
    (name) => `<li class="chat__item">${name}</li>`
  ).join(""),
  handleClick: handleClick
});

export { chatsMarkup };

import { CHAT_NAMES } from "./chat_names-mock.js";

const renderChat = () => {
  const chat__list = document.createElement("UL");
  chat__list.className = "chat__list";

  CHAT_NAMES.forEach((name) => {
    const chat__item = document.createElement("LI");
    chat__item.textContent = name;
    chat__item.className = "chat__item";
    chat__list.appendChild(chat__item);
  });

  return chat__list;
};

const renderButton = () => {
  const chat__button = document.createElement("BUTTON");
  chat__button.className = "chat__button";

  const span_text = document.createElement("SPAN");
  span_text.textContent = "Add chat";
  span_text.className = "chat__text";
  chat__button.appendChild(span_text);

  const wrapper__button = document.createElement("DIV");
  wrapper__button.className = "wrapper__button";

  wrapper__button.appendChild(chat__button);

  return wrapper__button;
};

const list = renderChat();
const button = renderButton();

export { list, button };

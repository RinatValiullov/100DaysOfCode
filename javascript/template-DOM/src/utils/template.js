import { CHAT_NAMES } from "./chat_names-mock";

const template = `
  <div class="{{ wrapperClassName }}">
    <div class="chat__button">
      <span class="{{ buttonTextClassName }}">{{ buttonText }}</span>
    </div>

    <ul class="{{ chatListClassName }}">
      {{ chatListItems }}
    </ul>
  </div>
`;

const chatsTemplate = new GenerateTempl(template);

const chatsMarkup = chatsTemplate.compile({
  wrapperClassName: "",
  buttonTextClassName: "",
  buttonText: "",
  chatListClassName: "",
  chatListItems: CHAT_NAMES.map((name) => `<li class="chat__item">${name}</li>`)
});

export { chatsMarkup };

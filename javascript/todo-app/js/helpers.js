const createComponent = (tag, text, ...className) => {
  const element = document.createElement(tag);
  element.classList.add(...className);
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);

  return element;
};

const createItem = (tag, text, className) => {
  const item = document.createElement(tag);
  item.classList.add(className);

  const span = createComponent("span", text, `${className}-text`);
  const buttonComplete = createComponent(
    "button",
    "complete",
    "btn",
    `${className}-complete`
  );
  const buttonDelete = createComponent(
    "button",
    "delete",
    "btn",
    `${className}-delete`
  );

  item.append(span, buttonComplete, buttonDelete);

  return { item, span, buttonComplete, buttonDelete };
};

// Validate input value
const isEmpty = (value) => !value.trim().length;

// Unique id
const uniqueId = () => {
  return Date.now();
};

export { createItem, isEmpty, uniqueId };

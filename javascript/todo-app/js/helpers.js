const createAdditionalElement = (tag, text, className = "") => {
  const addElement = document.createElement(tag);
  addElement.classList.add(className);
  const textNode = document.createTextNode(text);
  addElement.appendChild(textNode);

  return addElement;
};

export const createElement = (tagName, tagClass = "", tagText = "tag text") => {
  const elementTag = document.createElement(tagName);
  elementTag.classList.add(tagClass);
  // const elementText = document.createTextNode(tagText);
  // elementTag.appendChild(elementText);

  const spanText = createAdditionalElement("span", tagText, `${tagClass}-text`);
  const btnDel = createAdditionalElement(
    "button",
    "delete",
    `${tagClass}-delete`
  );

  elementTag.append(spanText, btnDel);

  return elementTag;
};

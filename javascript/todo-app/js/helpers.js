export const createElement = (tagName, tagClass = "", tagText = "tag text") => {
  const elementTag = document.createElement(tagName);
  elementTag.classList.add(tagClass);
  const elementText = document.createTextNode(tagText);
  elementTag.appendChild(elementText);

  return elementTag;
};

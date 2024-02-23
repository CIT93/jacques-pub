function createElement(elementType, elementText = null) {
  const newElement = document.createElement(elementType);
  if (!elementText) {
    return newElement;
  } else {
    const newText = document.createTextNode(elementText);
    newElement.appendChild(newText);
  }
  return newElement;
}

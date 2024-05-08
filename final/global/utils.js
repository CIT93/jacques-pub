export const getRandomNumber = (length) => Math.floor(Math.random() * length);

export const cssClassEdit = (element, action, ...classes) =>
  action === "add"
    ? element.classList.add(...classes)
    : element.classList.remove(...classes);

export const handleError = (error) => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.classList.add(
    "flex",
    "flex-center_center",
    "flex-column",
    "page-wrapper",
    "w-100"
  );
  const hyperlink = document.createElement("a");
  hyperlink.href = "questions.html";
  hyperlink.textContent = "Go back";
  const p = createElement("p", error, ["error"]);
  p.style.fontSize = "5rem";
  main.append(p, hyperlink);
};

export const route = (destination) => {
  const currentLocation = window.location.href;
  // Get index location of the last forward slash, starting from the end to the beginning.
  const lastForwardSlash = currentLocation.lastIndexOf("/");
  // With the index retrieved from lastForwardSlash, we can now slice the currentLocation address to get everything up until the last foward slash that way we can change the location by file name. We plus one; otherwise, we'd have to add a forward slash to the string in newUrl
  const baseUrl = currentLocation.slice(0, lastForwardSlash + 1);
  const newUrl = baseUrl.concat(destination);
  window.location.href = newUrl;
};

export const createElement = (element, text = null, classes = null) => {
  const el = document.createElement(element);
  el.textContent = text;
  if (classes) {
    el.classList.add(...classes);
  }
  return el;
};

export const createEventListeners = (events) =>
  events.forEach((evnt) =>
    evnt.target.addEventListener(evnt.type, evnt.listener)
  );

export const loadGoogleFonts = () => {
  const preConnectApi = createElement("link")
  preConnectApi.setAttribute("rel", "preconnect")
  preConnectApi.setAttribute("href", "https://fonts.googleapis.com")
  const googleStatic = createElement("link")
  googleStatic.setAttribute("rel", "preconnect")
  googleStatic.setAttribute("href", "https://fonts.gstatic.com")
  googleStatic.setAttribute("crossorigin", "")
  const fonts = createElement("link")
  fonts.setAttribute("rel", "stylesheet")
  fonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&family=Prata&display=swap");
  document.head.append(preConnectApi, googleStatic, fonts);
}
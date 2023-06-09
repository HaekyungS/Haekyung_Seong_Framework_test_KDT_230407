function CreateDoc(tag, parent, styleprop) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  for (let styletag in styleprop) {
    element.style[styletag] = styleprop[styletag];
  }
}

const content = {
  HTML: { "content-Type": "text/html" },
  CSS: { "content-Type": "text/css" },
  JS: { "content-Type": "text/javascript" },
};

const responseSetting = (response, contentType, page) => {
  response.writeHead("200", contentType);
  response.write(page);
  response.end();
};

export { CreateDoc, responseSetting, content };

const grittyFace = document.querySelector("img");
const rotateLeftButton = document.getElementById("rotate-left-button");
const rotateRightButton = document.getElementById("rotate-right-button");
const hideGrittyFaceContainer = document.getElementById("gritty-border");
const hideGrittyFace = hideGrittyFaceContainer.children[0];
const form = document.querySelector("form");
const greetsList = document.querySelector("div#greets>ul");

let position = 0;

rotateLeftButton.addEventListener("click", () => {
  position = position - 20;
  grittyFace.style.transform = `rotate(${position}deg)`;
});

rotateRightButton.addEventListener("click", () => {
  position = position + 20;
  grittyFace.style.transform = `rotate(${position}deg)`;
});

hideGrittyFaceContainer.addEventListener("mouseenter", () => {
  hideGrittyFace.style.visibility = "hidden";
});

hideGrittyFaceContainer.addEventListener("mouseleave", () => {
  hideGrittyFace.style.visibility = "visible";
});

const createNewMessage = (message) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "avatar";
  const span = document.createElement("span");
  span.textContent = message;
  li.append(div, span);
  greetsList.appendChild(li);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = e.target[0].value;
  createNewMessage(newMessage);
  form.reset();
});

const containerDiv = document.getElementById("hello");
const changeElement = document.createElement("p");
const text = document.createTextNode("I will change on events");

changeElement.appendChild(text);

const { body } = document;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.width = "20%";
body.style.gap = "10px";
body.style.margin = "10em auto";

const buttonElement = document.createElement("button");
buttonElement.innerText = "New Button";
buttonElement.addEventListener("click", () => {
  containerDiv.innerHTML = "<h1>You clicked the New button</h1>";
  containerDiv.style.color = "red";
});
body.appendChild(buttonElement);

const demo = () => {
  containerDiv.innerHTML = "<h1>This is the updated Hello World</h1>";
  containerDiv.style.color = "blue";
  containerDiv.appendChild(changeElement);
};

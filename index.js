console.log("connected");
/* const header = document.querySelector("h1");
console.log(header.parentElement);
 */

const DOMSelectors = {
  header: document.querySelectorbyid("header"),
  description: document.querySelector("#card-desc"),
  items: document.querySelectorAll("list"),
  button: document.querySelectorAll("btn"),
};

console.log(DOMSelectors.header);
console.log(DOMSelectors.description);

function changeColor() {
  let button = document.querySelector("button");
  console.log(button);
  button.addEventListener("click", function (event) {
    // listen to click even
    event.preventDefault();
    // prevents default behavior
    console.log(event.target);
    //logging quick event
    button.style.backgroundColor = "red";
  });
}
changeColor();

//DOMSelectors.form.addEventListener("submit", function (event)){

//select ALL list items
const item = document.querySelectorAll("li");
//turn the nodelist into an Array
const items = Array.from(item);
//iterate/Loop over array and for each element make the color red
items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target);
  })
);
let card = {
  name: "Name here",
};

DOMSelectors.container.insertAdjacentHTML("beforeend");

// event listener for form
// get values from form for widget object
// create card, insert the card
// find remove buttons and add event listeners

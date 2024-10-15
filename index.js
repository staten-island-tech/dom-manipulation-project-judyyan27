const DOMSelectors = {
  header: document.querySelector("h2"),
  input_desc: document.querySelector(".desc"),
  form: document.querySelector("form"),
  button: document.querySelectorbyid("#btn"),
};

console.log(DOMSelectors.input_desc);

function changeColor() {
  let button = DOMSelectors.button;
  button.button.addEventListener("click", function () {
    // listen to click even
    event.preventDefault();
    // prevents default behavior
    console.log(event.target);
    //logging quick event
    button.style.backgroundColor = "red";
  });
}
changeColor();

// DOMSelectors.form.addEventListener("submit", function ()){




DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.lof(document.querySelector("input").value);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target);
  })
);
let card = {
  name: "Name here",
  
};

DOMSelectors.container.insertAdjacentHTML("beforeend"); */

// event listener for form
// get values from form for widget object
// create card, insert the card
// find remove buttons and add event listeners

//select ALL list items
const item = document.querySelectorAll("li");
//turn the nodelist into an Array
const items = Array.from(item);
//iterate/Loop over array and for each element make the color red
items.forEach((el) => (el.style.color = "red")); 
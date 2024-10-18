const DOMSelectors = {
  header: document.querySelector("h2"),
  form: document.querySelector("form"),
  button: document.querySelectorbyid("#btn"),
  box: document.querySelectorbyid("#container-box"),
  name: document.querySelectorbyid("#name"),
  description: document.querySelectorbyid("#description"),
};
button.addEventListener("click", function (event) {
  event.preventDefault();

  let name = DOMSelectors.name.value;
  let description = DOMSelectors.description.value;

  console.log(document.querySelector("input").value);

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div id="container-box">
    <div class="card">
      <h1 class="card-title">${name}</h1>
      <p class="text">${description}</p>
    </div> 
    </div>`
  );
});
/* 
function changeColor() {
  let button = DOMSelectors.button;
  button.button.addEventListener("click", function () {
    // listen to click event
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

 */

// event listener for form
// get values from form for widget object
// create card, insert the card
// find remove buttons and add event listeners

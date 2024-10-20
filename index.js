const DOMSelectors = {
  header: document.querySelector("h2"),
  form: document.querySelector("form"),
  button: document.querySelectorbyid("#btn"),
  box: document.querySelectorbyid("#container-box"),
  name: document.querySelectorbyid("#name"),
  description: document.querySelectorbyid("#description"),
};
//button.addEventListener("click", function (event) {
//  event.preventDefault();
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target);
  })
);

DOMSelectors.form.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

let name = DOMSelectors.name.value;
let description = DOMSelectors.description.value;

console.log(document.querySelector("input").value);

DOMSelectors.box.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
          <h1 class="card-title">${name}</h1>
          <p class="card-desc">${description}</p>
          <img class="card-img" src="https://img.freepik.com/premium-photo/sweetheart-delights-valentines-day-cute-dessert-clipart_1077802-71338.jpg"
            alt="image of a dessert"
          />
        </div>`
);

// event listener for form
// get values from form for widget object
// create card, insert the card
// find remove buttons and add event listeners

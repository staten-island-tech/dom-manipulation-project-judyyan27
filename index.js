const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`#container-box`),
  name: document.querySelector(`#name`),
  description: document.querySelector(`#description`),
};

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target);
  })
);

DOMSelectors.form.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  console.log(document.querySelector("input").value);

  let name = DOMSelectors.name.value;
  let description = DOMSelectors.description.value;

  console.log(document.querySelector("input").value);

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
          <h1 class="card-title">${name}</h1>
          <p class="card-desc">${description}</p>
          <img class="card-img" src="https://img.freepik.com/premium-photo/sweetheart-delights-valentines-day-cute-dessert-clipart_1077802-71338.jpg"
            alt="image of a dessert"
          />
          <button type="remove" class= "remove">Remove</button>
        </div>`
  );

  const newBox = DOMSelectors.container.lastElementChild;

  const removeButton = newBox.querySelector(".remove");

  removeButton.addEventListener("click", function () {
    newBox.remove();
  });

  clearFields();
});

const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`#container-box`),
  name: document.querySelector(`#name`),
  description: document.querySelector(`#description`),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  const name = DOMSelectors.name.value;
  const description = DOMSelectors.description.value;

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

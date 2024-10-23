const DOMSelectors = {
  form: document.querySelector(`form`),
  button: document.querySelector(`.submit`),
  container: document.querySelector(`#container-box`),
  name: document.querySelector(`#name`),
  flavor: document.querySelector(`#description`),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  const name = DOMSelectors.name.value;
  const flavor = DOMSelectors.flavor.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
          <h1 class="card-title">${name}</h1>
          <p class="card-desc">${flavor}</p>
          <img class="card-img" src="https://img.freepik.com/premium-photo/sweetheart-delights-valentines-day-cute-dessert-clipart_1077802-71338.jpg"
            alt="image of a dessert"
          />
          <button type="remove" class= "remove">Remove</button>
        </div>`
  );

  const newcard = DOMSelectors.container.lastElementChild;
  const removeButton = newcard.querySelector(".remove");

  removeButton.addEventListener("click", function () {
    newcard.remove();
  });

  clearFields();
});

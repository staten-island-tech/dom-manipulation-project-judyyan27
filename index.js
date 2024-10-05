console.log("connected");
/* const header = document.querySelector("h1");
console.log(header.parentElement);
 */

const DOMSelectors = {
  header: document.querySelectorbyid("header"),
  description: document.querySelector("#card-desc"),
  items: document.querySelectorAll("list"),
};

console.log(DOMSelectors.header);

/* function changeColor() {
  let button = document.querySelector("button");
  console.log(button);
  button.addEventListener("submit", function (event) {
    // listen to click even
    event.preventDefault();
    // prevents default behavior
    console.log(event.target);
    //logging quick event
    console.log(event.target);
    button.style.backgroundColor = " blue";
  });
}
 */

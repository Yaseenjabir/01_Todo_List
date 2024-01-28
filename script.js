const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const list = document.querySelector("ul");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerHTML = ` <span>${input.value}</span>
  <div class="buttons">
    <button class="done combine">Done</button>
    <button class="remove combine">Remove</button>
  </div>`;
  list.append(newLi);
  const removeButton = newLi.querySelector(".remove");
  removeButton.addEventListener("click", () => {
    newLi.remove();
  });
});
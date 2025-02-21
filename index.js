const listItemArray = [];
const input = document.getElementById("todo-input");
const list = document.getElementById("list", { class: "list-item" });

function addListItem(event) {
  if (event.key === "Enter") {
    let text = input.value;
    text = text.trim();
    if (text.length < 1) return;
    input.value = "";

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox";

    // Create the label element
    const label = document.createElement("div");
    label.textContent = text;

    const listEl = document.createElement("li");
    listEl.appendChild(checkbox);
    listEl.appendChild(label);

    // listEl.textContent = text;
    list.appendChild(listEl);

    const item = {
      element: listEl,
      active: true,
    };
    listItemArray.push(item);
    const index = getLen();

    listEl.addEventListener("click", (e) => handleListClick(e, index));

    // checkbox.addEventListener("click", function (event) {});

    // localStorage.setItem("list");

    // Optionally, you might call a function or perform an action here
  }
}

function showAll() {
  list.innerHTML = "";
  for (let i = 0; i < listItemArray.length; i++) {
    const element = listItemArray[i];

    list.appendChild(element.element);
  }
}

function showActive() {
  list.innerHTML = "";
  for (let i = 0; i < listItemArray.length; i++) {
    const element = listItemArray[i];
    if (element.active) {
      list.appendChild(element.element);
    }
  }
}

function showCompleted() {
  list.innerHTML = "";
  for (let i = 0; i < listItemArray.length; i++) {
    const element = listItemArray[i];
    if (!element.active) {
      list.appendChild(element.element);
    }
  }
}

function getLen() {
  return listItemArray.length - 1;
}

function handleListClick(event, index) {
  const textDiv = event.currentTarget.children[1];
  const checkDiv = event.currentTarget.children[0];
  console.log(index);
  if (listItemArray[index].active) {
    checkDiv.className = "checked-checkbox";

    textDiv.style.textDecoration = "line-through";
    listItemArray[index].active = false;
  } else {
    checkDiv.className = "checkbox";

    textDiv.style.textDecoration = "none";
    listItemArray[index].active = true;
  }
}

input.addEventListener("keydown", addListItem);

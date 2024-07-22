const task_parameter = document.querySelector("#task_input");
const add_task_btn = document.querySelector("#submit");
const delete_task_btn = document.querySelector("#delete");
const taskList = document.querySelector("#my_taskList");

add_task_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const task = task_parameter.value;

  temp_html = `${task}<div><button id="delete" type="button">Delete</button></div>`;

  if (task.trim() === "") {
    alert("할 일을 입력하세요");
    return;
  }

  const span = document.createElement('span');
  span.className = 'added_task_items';
  span.innerHTML = temp_html;
  taskList.appendChild(span);
  taskList.append(document.createElement('hr'));
  task_parameter.value = "";
});

taskList.addEventListener("click", function (e) {
  if (e.target.id === "delete") {
    const parent_element = e.target.parentElement.parentElement;
    parent_element.nextSibling.remove();
    parent_element.remove();
  }
});
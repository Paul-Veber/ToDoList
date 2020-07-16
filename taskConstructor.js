// count number of task in toDoList
export const countTask = () => {
  const tasksNumber = document
    .getElementById("toDoList")
    .getElementsByClassName("task").length;
  if (tasksNumber === false) {
    return 0;
  } else {
    return tasksNumber;
  }
};

// create Element
const createElement = (element, id, taskClass, text, parentNode) => {
  const newElement = document.createElement(element);
  newElement.id = id;
  newElement.className = taskClass;
  newElement.textContent = text;
  parentNode.appendChild(newElement);
};

// create error Message
export const errorMessage = (message) => {
  const newErrorMessage = document.createElement("p");
  newErrorMessage.textContent = message;
  document.getElementById("error").appendChild(newErrorMessage);
};

// clear error message
export const clearerrorMessage = () => {
  const errorContainer = document.getElementById("error");
  while (errorContainer.lastElementChild) {
    errorContainer.lastElementChild.remove();
  }
};

// create Task
export const createTask = (taskID, taskName, taskSatut) => {
  // create task div
  createElement("div", taskID, "task", "", toDoList);
  const newtaskDiv = document.getElementById(taskID);

  // create task name
  createElement("h3", "name" + taskID, "taskName", taskName, newtaskDiv);

  // create task status
  if (taskSatut === "realise") {
    createElement("div", "checked" + taskID, "checked", "", newtaskDiv);
  } else {
    createElement(
      "label",
      "checkboxLabel" + taskID,
      "checkboxLabel",
      "tache réaliser ?",
      newtaskDiv
    );
    const checkboxLabel = document.getElementById("checkboxLabel" + taskID);
    createElement("button", "checkbox" + taskID, "checkbox", "", checkboxLabel);
    // document.getElementById("checkbox" + taskID).type = "checkbox";
  }

  // create task modif buttons
  createElement("button", "modifBtn" + taskID, "modifBtn", "", newtaskDiv);
  createElement("button", "suprBtn" + taskID, "suprBtn", "", newtaskDiv);
};
// check if there is no task
export const noTask = () => {
  const notask = document.getElementById("noTask");
  if (constructor.countTask() > 0 && notask) {
    notask.remove();
  }
};

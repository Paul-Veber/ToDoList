// list of task created by the user
const taskList = [];

// count number of task in toDoList
const countTask = () => {
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

// create eror Message
const errorMessage = (message) => {
  const newErrorMessage = document.createElement('p');
  newErrorMessage.textContent = message;
  document.getElementById('error').appendChild(newErrorMessage);
};

// create Task
const createTask = (taskID, taskName, taskSatut) => {
  // create task div
  createElement('div', taskID, 'task', '', toDoList);
  const newtaskDiv = document.getElementById(taskID);

  // create task name
  createElement('h3', 'name' + taskID, 'taskName', taskName, newtaskDiv);

  // create task status
  if(taskSatut === 'realise') {
    createElement('div', 'checked' + taskID, 'checked', '', newtaskDiv);
  } else {
    createElement('label', 'checkboxLabel' + taskID, 'checkboxLabel', 'tache réaliser ?', newtaskDiv);
    const checkboxLabel = document.getElementById('checkboxLabel' + taskID);
    createElement('input', 'checkbox' + taskID, 'checkbox', '', checkboxLabel);
    document.getElementById('checkbox' + taskID).type = 'checkbox';
  }

  // create task modif buttons
  createElement('button', 'modifBtn' + taskID, 'modifBtn', '', newtaskDiv);
  createElement('button', 'suprBtn' + taskID, 'suprBtn', '', newtaskDiv);
};


// events when adding new task
const btnAddTask = document.getElementById("addTask");
const toDoList = document.getElementById("toDoList");
btnAddTask.addEventListener("click", (e) => {
  const taskID = "task" + countTask();
  const taskName = document.getElementById("newTaskName").value;
  const taskSatut = document.getElementById("newTaskStatut").value;

  // save task
  taskList.push(taskID);
  localStorage.setItem('name' + taskID, taskName);
  localStorage.setItem('statut' + taskID, taskSatut);
  localStorage.setItem('taskList', JSON.stringify(taskList));

  if (taskSatut !== "default") {
    if (taskName !== "") {
      createTask(taskID, taskName, taskSatut);
    } else {
      errorMessage('la tache n\'a pas de nom');
    }
  } else {
    errorMessage('Choisissez si la tâche est "à realiser" ou "réaliser"');
  }
  const notask = document.getElementById("noTask")
  if (countTask() > 0 && notask) {
    notask.remove();
  }
});

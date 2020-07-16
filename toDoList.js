import * as constructor from './taskConstructor.js';

// charge task saved on local storage

let savedTasks = localStorage.getItem("taskList");
if (savedTasks) {
  savedTasks = JSON.parse(savedTasks);
  savedTasks.forEach((task) => {
    const taskID = task;
    const taskName = localStorage.getItem("name" + taskID);
    const taskSatut = localStorage.getItem("statut" + taskID);

    constructor.createTask(taskID, taskName, taskSatut);

    constructor.noTask();
  });
}

// events when adding new task
const btnAddTask = document.getElementById("addTask");
btnAddTask.addEventListener("click", (e) => {
  // increment and save number of tasks created
  tasknumber++;
  localStorage.setItem("tasknumber", tasknumber);

  const taskID = "task" + tasknumber;
  const taskName = document.getElementById("newTaskName").value;
  const taskSatut = document.getElementById("newTaskStatut").value;

  // save task
  taskList.push(taskID);
  localStorage.setItem("name" + taskID, taskName);
  localStorage.setItem("statut" + taskID, taskSatut);
  localStorage.setItem("taskList", JSON.stringify(taskList));

  constructor.clearerrorMessage();

  if (taskSatut !== "default") {
    if (taskName !== "") {
      constructor.createTask(taskID, taskName, taskSatut);
    } else {
      constructor.errorMessage("la tache n'a pas de nom");
    }
  } else {
    constructor.errorMessage('Choisissez si la tâche est "à realiser" ou "réaliser"');
  }
  constructor.noTask();
});

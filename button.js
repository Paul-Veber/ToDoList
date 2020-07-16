const toDoListDIV = document.getElementById("toDoList");
toDoList.addEventListener("click", (e) => {
  const button = e.target;
  const parent = button.parentNode;
  const parentId = parent.id;
  let newName;
  let userTaskList;
  let usertaskIndex;
  switch (button.className) {
    case "suprBtn":
      localStorage.removeItem("name" + parentId);
      localStorage.removeItem("statut" + parentId);

      userTaskList = JSON.parse(localStorage.getItem("taskList"));
      usertaskIndex = userTaskList.indexOf(parentId);
      userTaskList.splice(usertaskIndex, 1);

      taskList = userTaskList;
      localStorage.setItem("taskList", JSON.stringify(taskList));

      document.getElementById(parentId).remove();

      if (countTask === 0) {
        createElement("span", "noTask", "", "Aucune Tache", "toDoList");
      }

      break;

    case "modifBtn":
      newName = window.prompt("Entrez le nouveau nom de la tache");
      document.getElementById("name" + parentId).textContent = newName;
      break;

    case "checkbox":
      createElement(
        "div",
        "checked" + parentId,
        "checked",
        "",
        parent.parentNode.id
      );
      parentId.remove();
      break;
  }
});

const clearAllBtn = document.getElementById("clearAll");

clearAllBtn.addEventListener("click", (e) => {
  const verif = window.prompt('Pour suprimer toutes vos taches tapez "OUI"');
  if (verif === "OUI") {
    while (toDoListDIV.lastElementChild) {
      toDoListDIV.removeChild(toDoListDIV.lastElementChild);
    }
  }
  tasknumber = 0;
  taskList.length = 0;
  localStorage.clear();
});
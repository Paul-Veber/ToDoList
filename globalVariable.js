// list of task created by the user
let taskList = [];

// count number of task created by the user and check if there are any saved
let tasknumber = 0;

const userTasknumber = parseInt(localStorage.getItem("tasknumber"));
if (userTasknumber) {
  tasknumber = userTasknumber;
}

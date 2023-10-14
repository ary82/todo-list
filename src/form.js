import { createProject, createTask } from "./task.js";
import { projectList, taskList } from "./task.js";
import displayHandler from "./display.js";
const taskForm = document.querySelector("#add_task > form");
const projectForm = document.querySelector("#add_project > form");
document.querySelectorAll("input[type='date']").forEach((element) =>
  element.valueAsDate = new Date()
);

taskForm.addEventListener("submit", () => {
  let taskName = document.getElementById("title").value;
  let projectName = document.getElementById("project").value;
  let priority;
  document.getElementsByName("priority").forEach((e) => {
    if (e.checked) priority = e.value;
  });
  let date = document.getElementById("date").value;
  let newTask = createTask(taskName, projectName, priority, date, false);
  taskList.push(newTask);
  localStorage.setItem("taskL", JSON.stringify(taskList));
  displayHandler();
});

projectForm.addEventListener("submit", () => {
  let projectName = document.getElementById("prj_title").value;
  let priority;
  document.getElementsByName("prj_priority").forEach((e) => {
    if (e.checked) priority = e.value;
  });
  let date = document.getElementById("prj_date").value;
  let newProject = createProject(projectName, priority, date, false);
  const newOption = document.createElement("option");
  newOption.value = newProject.name;
  newOption.innerText = newProject.name;
  document.getElementById("project").appendChild(newOption);
  projectList.push(newProject);
  localStorage.setItem("projectL", JSON.stringify(projectList));
  displayHandler();
});

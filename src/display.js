import { projectList, taskList } from "./task.js";
const content = document.getElementById("right_side");
export default function displayHandler() {
  content.innerText = "";
  switch (currentMode) {
    case "task_upcoming":
      break;
    case "task_today":
      break;
    case "task_next_week":
      break;
    case "task_missed":
      break;
    case "task_priority":
      break;
    case "project_upcoming":
      break;
    case "project_missed":
      break;
    case "project_priority":
      break;

    default:
      break;
  }
}

function handleTask(arr) {
  arr.forEach((element) => {
    const newDOM = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newProject = document.createElement("h4");
    const newPriority = document.createElement("h4");
    const newDate = document.createElement("h4");
    newTitle.innerText = element.name;
    newProject.innerText = element.project;
    newPriority.innerText = element.priority;
    newDate.innerText = element.date;
    newDOM.appendChild(newTitle);
    newDOM.appendChild(newProject);
    newDOM.appendChild(newPriority);
    newDOM.appendChild(newDate);
    document.getElementById("right_side").appendChild(newDOM);
  });
}

function handleProject(arr) {
}

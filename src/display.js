import { projectList, taskList } from "./task.js";
import { currentMode } from "./mode.js";
import compareAsc from "date-fns/compareAsc";
import { isPast, isThisWeek, isToday, parseISO } from "date-fns";
import { createProject, createTask } from "./task.js";
const content = document.getElementById("right_side");
export default function displayHandler() {
  let newArr = [];
  let high = [];
  let medium = [];
  let low = [];
  taskList.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
  projectList.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
  content.innerText = "";
  switch (currentMode) {
    case "task_upcoming":
      handleTask(taskList);
      break;
    case "task_today":
      newArr = [];
      taskList.forEach((e) => {
        if (isToday(parseISO(e.date))) {
          newArr.push(e);
        }
      });
      handleTask(newArr);
      break;
    case "task_nextweek":
      newArr = [];
      taskList.forEach((e) => {
        if (isThisWeek(parseISO(e.date))) {
          newArr.push(e);
        }
      });
      handleTask(newArr);
      break;
    case "task_missed":
      newArr = [];
      taskList.forEach((e) => {
        if (isPast(parseISO(e.date)) && !isToday(parseISO(e.date))) {
          newArr.push(e);
        }
      });
      handleTask(newArr);
      break;
    case "task_priority":
      high = [];
      medium = [];
      low = [];
      taskList.forEach((e) => {
        if (e.priority === "high") {
          high.push(e);
        } else if (e.priority === "medium") {
          medium.push(e);
        } else {
          low.push(e);
        }
      });
      handleTask(high.concat(medium, low));
      break;
    case "project_upcoming":
      handleProject(projectList);
      break;
    case "project_missed":
      newArr = [];
      projectList.forEach((e) => {
        if (isPast(parseISO(e.date)) && !isToday(parseISO(e.date))) {
          newArr.push(e);
        }
      });
      handleProject(newArr);
      break;
    case "project_priority":
      high = [];
      medium = [];
      low = [];
      projectList.forEach((e) => {
        if (e.priority === "high") {
          high.push(e);
        } else if (e.priority === "medium") {
          medium.push(e);
        } else {
          low.push(e);
        }
      });
      handleProject(high.concat(medium, low));
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
    if (element.done) {
      newDOM.classList.toggle("done");
    }
    newDOM.addEventListener("click", () => {
      newDOM.classList.toggle("done");
      element.done = !element.done;
      localStorage.setItem("taskL", JSON.stringify(taskList));
      console.log(element);
    });
    document.getElementById("right_side").appendChild(newDOM);
    document.getElementById("right_side").className = "task";
  });
}

function handleProject(arr) {
  arr.forEach((element) => {
    const newDOM = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newPriority = document.createElement("h4");
    const newDate = document.createElement("h4");
    newTitle.innerText = element.name;
    newPriority.innerText = element.priority;
    newDate.innerText = element.date;
    newDOM.appendChild(newTitle);
    newDOM.appendChild(newPriority);
    newDOM.appendChild(newDate);
    const newDiv = document.createElement("div");
    let bool = false;
    taskList.forEach((e) => {
      if (e.project === element.name) {
        const newTitle = document.createElement("h5");
        newTitle.innerText = e.name;
        newDiv.appendChild(newTitle);
        bool = true;
      }
    });
    if (bool) newDOM.appendChild(newDiv);
    if (element.done) {
      newDOM.classList.toggle("done");
    }
    newDOM.addEventListener("click", () => {
      newDOM.classList.toggle("done");
      element.done = !element.done;
      localStorage.setItem("projectL", JSON.stringify(projectList));
      console.log(element);
    });
    document.getElementById("right_side").appendChild(newDOM);
    document.getElementById("right_side").className = "project";
  });
}

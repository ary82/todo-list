import { projectList, taskList } from "./task.js";
import { currentMode } from "./mode.js";
import compareAsc from "date-fns/compareAsc";
import { isPast, isThisWeek, isToday, parseISO } from "date-fns";
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
      console.log(new Date());
      taskList.forEach((e) => {
        if (isToday(parseISO(e.date))) {
          console.log("wadoc");
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
    document.getElementById("right_side").appendChild(newDOM);
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
    taskList.forEach((e) => {
      if (e.project === element.name) {
        const newTitle = document.createElement("h5");
        newTitle.innerText = e.name;
        newDiv.appendChild(newTitle);
      }
    });
    newDOM.appendChild(newDiv);
    document.getElementById("right_side").appendChild(newDOM);
  });
}

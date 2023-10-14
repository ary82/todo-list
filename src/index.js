import "./normalize.css";
import "./style.scss";
import "./theme.js";
import "./add.js";
import "./form.js";
import "./mode.js";
import displayHandler from "./display";
import { projectList } from "./task";
displayHandler();

projectList.forEach((element) => {
  const newOption = document.createElement("option");
  newOption.value = element.name;
  newOption.innerText = element.name;
  document.getElementById("project").appendChild(newOption);
});

import displayHandler from "./display.js";
const modeButtons = document.querySelectorAll("#nav_bar > h3");
export let currentMode = "task_upcoming";
modeButtons.forEach((element) => {
  element.addEventListener("click", () => {
    clearClass();
    element.classList.toggle("active");
    console.log(element.id);
    currentMode = element.id;
    displayHandler();
  });
});
function clearClass() {
  modeButtons.forEach((e) => e.classList.remove("active"));
}

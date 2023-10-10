const addButton = document.getElementById("add_button");
const addHoverbox = document.getElementById("add_hoverbox");
const addTaskorProject = document.querySelectorAll("#add_hoverbox > h4");
const addTask = document.getElementById("add_task");
const addProject = document.getElementById("add_project");

addButton.addEventListener("click", () => {
  addButton.classList.toggle("clicked");
  addHoverbox.classList.toggle("hoverbox_visible");
});

addTaskorProject.forEach((element) => {
  element.addEventListener("click", () => {
    addHoverbox.classList.toggle("hoverbox_visible");
    addButton.classList.toggle("clicked");
    if (element.innerText === "Task") {
      addTask.showModal();
    } else {
      addProject.showModal();
    }
  });
});

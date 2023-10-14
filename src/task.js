export function createProject(name, priority, date) {
  let done = false;
  const toggleDone = () => done = !done;
  const getDone = () => done;
  return {
    name,
    priority,
    date,
    getDone,
    toggleDone,
  };
}

export function createTask(name, project, priority, date) {
  const task = createProject(name, priority, date);
  return Object.assign({}, task, { project });
}
export let taskList = [];
export let projectList = [];

if (localStorage.getItem("taskL")) {
  taskList = JSON.parse(localStorage.getItem("taskL"));
}
if (localStorage.getItem("projectL")) {
  projectList = JSON.parse(localStorage.getItem("projectL"));
}

export function createProject(name, priority, date, done) {
  return {
    name,
    priority,
    date,
    done,
  };
}
export function createTask(name, project, priority, date, done) {
  const task = createProject(name, priority, date, done);
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

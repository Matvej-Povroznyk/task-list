import * as storage from "./helpers/storage";
import { renderTask } from "./helpers/render-tasks";

const TASKS_STORAGE_KEY = "taskList";
const taskList = storage.load(TASKS_STORAGE_KEY) || [];

const tasksContainer = document.querySelector(`[data-tasks]`);
renderTask(tasksContainer, taskList);

const form = document.querySelector(`[data-tasks-form]`);

const handleSaveTasks = (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.taskTitle.value;
  const description = form.taskDescription.value;
  const task = {
    id: crypto.randomUUID(),
    title,
    description,
  };

  taskList.push(task);
  storage.save(TASKS_STORAGE_KEY, taskList);

  renderTask(tasksContainer, taskList);

  form.reset();
};

const handleRemoveTask = (e) => {
  const target = e.target;
  if (target.dataset.action === "remove") {
    const task = target.closest("[data-id]");
    if (task) {
      const id = task.dataset.id;
      const index = taskList.findIndex((t) => t.id === id);

      taskList.splice(index, 1);
      renderTask(tasksContainer, taskList);
      storage.save(TASKS_STORAGE_KEY, taskList);
    }
  } else if (target.dataset.action === "clear") {
    taskList.length = 0;
    renderTask(tasksContainer, taskList);
    storage.save(TASKS_STORAGE_KEY, taskList)
  }
};

form.addEventListener("submit", handleSaveTasks);
tasksContainer.addEventListener("click", handleRemoveTask);

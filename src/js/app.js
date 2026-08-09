import * as storage from "./helpers/storage";

const TASKS_STORAGE_KEY = "taskList";

const taskList = storage.load(TASKS_STORAGE_KEY) || [];

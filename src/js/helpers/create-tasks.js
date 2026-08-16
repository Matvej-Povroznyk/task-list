import Handlebars from "handlebars";
import taskListTemplate from 'bundle-text:../../templates/task-list.hbs'

export const createTasksMarkup = Handlebars.compile(taskListTemplate)

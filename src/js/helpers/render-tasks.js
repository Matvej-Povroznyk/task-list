import { createTasksMarkup } from "./create-tasks";

export const renderTask = (container, data) => {
    if (!container) {
        console.error(`Container not found.`)
        return;
    }

    if (data.length === 0) {
        const markup = `<p class="empty-tasks">Завдання відсутні</p>`
        container.innerHTML = markup;
        return;
    }

    const markup = createTasksMarkup(data)
    container.innerHTML = markup;
}

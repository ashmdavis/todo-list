import "../scripts/display-task-styles.css";

export function displayTasks() {
    const taskListContainer = document.createElement("div")
    taskListContainer.classList.add("task-list-container");

    const tasks = ["Help me", "Write this code", "Test it out"];

    tasks.forEach((task) => {
        const taskCard = document.createElement("div");
        const taskCardContainer = document.createElement("div");
        const taskText = document.createElement("p");

        taskCardContainer.classList.add("task-card-container");
        taskCard.classList.add("task-card");
        taskText.classList.add("task-text");

        taskText.textContent = task;

        taskListContainer.append(taskCardContainer)
        taskCardContainer.append(taskCard);
        taskCard.append(taskText);
    });

    return taskListContainer;
}
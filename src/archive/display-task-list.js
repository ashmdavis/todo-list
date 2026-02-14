import "../scripts/display-daily-task-list-styles.css";
import { displayTasks } from "./display-daily-task.js";
import { format, addDays, add } from "date-fns";
export default { domHandler };


// export default function displayDailyTaskList() {
//     const date = new Date();
//     const tomorrow = addDays(date, 1);
//     const dateFormat = format(date, "MMM dd, yyyy")
//     const dayFormat = format(date, "E");

//     const mainContentContainer = document.querySelector("#main-content");
//     const card = document.createElement("div");
//     const cardContainer = document.createElement("div");
//     const cardHeader = document.createElement("div");
//     const headerTitle = document.createElement("div")
//     const headerDate = document.createElement("p");
//     const headerDay = document.createElement("h1");
//     const headerButtonContainer = document.createElement("div");
//     const addTaskButton = document.createElement("button");
//     const taskList = displayTasks();

//     card.classList.add("card");
//     cardContainer.classList.add("card-container");
//     headerTitle.classList.add("header-title");
//     cardHeader.classList.add("card-header");
//     addTaskButton.classList.add("add-task-button");

//     headerDate.textContent = dateFormat;
//     headerDay.textContent = dayFormat;

//     mainContentContainer.append(card);
//     card.append(cardContainer);
//     cardContainer.append(cardHeader, taskList);
//     cardHeader.append(headerTitle, headerButtonContainer);
//     headerTitle.append(headerDate, headerDay);
//     headerButtonContainer.append(addTaskButton);
// }

const domHandler = (() => {
    function renderMainContent() {
        const date = new Date();
        const tomorrow = addDays(date, 1);
        const dateFormat = format(date, "MMM dd, yyyy")
        const dayFormat = format(date, "E");

        const mainContentContainer = document.querySelector("#main-content");
        const card = document.createElement("div");
        const cardContainer = document.createElement("div");
        const cardHeader = document.createElement("div");
        const headerTitle = document.createElement("div")
        const headerDate = document.createElement("p");
        const headerDay = document.createElement("h1");
        const headerButtonContainer = document.createElement("div");
        const addTaskButton = document.createElement("button");
        const taskList = displayTasks();

        card.classList.add("card");
        cardContainer.classList.add("card-container");
        headerTitle.classList.add("header-title");
        cardHeader.classList.add("card-header");
        addTaskButton.classList.add("add-task-button");

        headerDate.textContent = dateFormat;
        headerDay.textContent = dayFormat;

        mainContentContainer.append(card);
        card.append(cardContainer);
        cardContainer.append(cardHeader, taskList);
        cardHeader.append(headerTitle, headerButtonContainer);
        headerTitle.append(headerDate, headerDay);
        headerButtonContainer.append(addTaskButton);
    }

    function renderTasks() {
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
    }

    return { renderMainContent, renderTasks };
})();





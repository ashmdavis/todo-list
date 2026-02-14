import "./dom-styles.css";
import { format, addDays, add } from "date-fns";

const renderCalendar = () => {
    const date = new Date();
    const tomorrow = addDays(date, 1);
    const dateFormat = format(date, "MMM dd, yyyy").toUpperCase();
    const dayFormat = format(date, "EEEE").toUpperCase();

    const mainContentContainer = document.querySelector("#main-content");

    const card = document.createElement("div");
    const cardHeader = document.createElement("div");
    const headerDate = document.createElement("h2");
    const headerDay = document.createElement("h1");
    const taskList = document.createElement("div");

    headerDate.textContent = dateFormat;
    headerDay.textContent = dayFormat;

    card.classList.add("calendar-card");
    cardHeader.classList.add("calendar-header");
    taskList.classList.add("calendar-task-list");

    requestAnimationFrame(() => {
        let taskCount = 0;
        let keepAdding = true;

        while (keepAdding) {
            const task = document.createElement("div");
            task.classList.add("calendar-task");

            if (taskCount === 0) {
                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = "Add a new task...";
                input.classList.add("task-input");
                task.append(input)
            } else {
                task.textContent = `Task ${taskCount}`;
            } 

            taskList.append(task);
            taskCount++;

            if (taskList.scrollHeight > taskList.clientHeight) {
                task.remove();
                keepAdding = false;
            }
        }
    });

    mainContentContainer.append(card);
    card.append(cardHeader, taskList);
    cardHeader.append(headerDate, headerDay);
};

export { renderCalendar };
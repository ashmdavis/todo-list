import "./styles/domStyles.css";
import { format, addDays } from "date-fns";

const todoListMap = new Map();

const renderCalendar = (onAddTodoClick) => {
    const mainContentContainer = document.querySelector("#main-content");

    const today = new Date();

    for (let i = 0; i < 5; i++) {
        const todoListId = crypto.randomUUID();


        const date = addDays(today, i);
        const dateFormat = format(date, "MMM dd, yyyy").toUpperCase();
        const dayFormat = format(date, "EEEE").toUpperCase();

        const card = document.createElement("div");
        const cardHeader = document.createElement("div");
        const headerDate = document.createElement("h2");
        const headerDay = document.createElement("h1");
        const todoList = document.createElement("div");
        const addTodoButton = document.createElement("button");

        headerDate.textContent = dateFormat;
        headerDay.textContent = dayFormat;
        addTodoButton.innerHTML = `<span>&#128930 Add</span> a card`;

        card.classList.add("calendar-card");
        cardHeader.classList.add("calendar-header");

        todoList.classList.add("calendar-todo-list");
        todoList.id = todoListId;

        addTodoButton.classList.add("add-todo-button");
        addTodoButton.dataset.listId = todoListId;

        // Adds highlight color for todays date
        if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        ) {
            headerDay.classList.add("today");
        }

        addTodoButton.addEventListener("click", () => {
            if (onAddTodoClick) onAddTodoClick(todoListId);
        });

        mainContentContainer.append(card);
        card.append(cardHeader, todoList, addTodoButton);
        cardHeader.append(headerDate, headerDay);

        todoListMap.set(todoListId, todoList);
    }
};

function getTodoListById(id) {
    return todoListMap.get(id);
}

export { renderCalendar, getTodoListById };
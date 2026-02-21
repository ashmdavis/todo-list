import { getTodoListById } from "./renderCalendar.js";
import { Todo } from "./todo.js";

function handleCreateTodo(todoListId) {
    const list = getTodoListById(todoListId);
    // Create todo card
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    const todoTitle = document.createElement("p");
    todoTitle.classList.add("todo-title");

    // Create input field
    const input = document.createElement("textarea");
    input.placeholder = "Enter task...";
    input.classList.add("todo-input");

    // Create todo buttons
    const todoButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    todoButtons.classList.add("todo-buttons");
    editButton.textContent = "Edit";
    deleteButton.textContent = "X";

    list.append(todoCard);
    todoCard.append(input);
    todoButtons.append(editButton, deleteButton);
    input.focus();

    const deleteTodo = () => {
        if (todoCard.parentNode) todoCard.remove();
        todoButtons.classList.remove("active");
        document.removeEventListener("click", clickAwayListener);
    };

    const createTodo = () => {
        const todoInput = input.value.trim();
        if (!todoInput) {
            deleteTodo();
        }

        input.remove();
        todoCard.append(todoTitle, todoButtons);
        todoButtons.classList.add("active");
        todoTitle.textContent = todoInput;
    };

    // Enter / Escape keys
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") createTodo();
        if (e.key === "Escape") deleteTodo();
    });

    const clickAwayListener = (e) => {
        if (!todoCard.contains(e.target)) {
            createTodo();
        }
    };
    setTimeout(() => { document.addEventListener("click", clickAwayListener);}, 0);

}

export { handleCreateTodo }
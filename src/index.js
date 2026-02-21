import "./styles.css";
import { renderCalendar } from "./scripts/renderCalendar.js";
import { handleCreateTodo } from "./scripts/createTodo.js";

document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(handleCreateTodo);
});
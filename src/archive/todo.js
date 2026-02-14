class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const userTodo = new Todo("Cook dinner", "I want to make lasagna", "today", "major");

console.log(userTodo);
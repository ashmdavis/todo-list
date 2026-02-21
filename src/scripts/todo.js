export default class Todo {
    constructor (title, notes = "", dueDate = "none", priority = "low") {
        this.id = crypto.randomUUID();
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}


/*Task 1*/
class Task {
    constructor(task) {
        this.task = task;
        this.isDone = false;
    }
}

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        if (task == '' || task == null) {
            console.log('You must enter task!');
        } else {
            this.tasks.push(new Task(task));
            console.log(`Task '${task}' added`);
        }
    }

    getTasksList() {
        console.log('all tasks:', this.tasks);
    }

    getTaskInfo(task) {
        console.log('task info:', this.tasks[this.tasks.findIndex(el => el.task === task)]);
    }

    deleteTask(task) {
        this.tasks.splice(
            this.tasks.findIndex(el => el.task === task),
            1
        );
        console.log(`Task '${task}' deleted!`);
    }

    editTask(taskOld, taskNew) {
        this.tasks[this.tasks.findIndex(el => el.task === taskOld)].task = taskNew;
        console.log(`Task ${taskOld} edited`);
    }

    setTaskDone(task) {
        this.tasks[this.tasks.findIndex(el => el.task === task)].isDone = true;
        console.log(`Task '${task}' done!`);
    }

    getTasksCount() {
        console.log('Count all tasks:', this.tasks.length);
    }

    getDoneTasksCount() {
        console.log('Count done taks:', this.tasks.filter(el => el.isDone).length);
    }
}

/*Test:*/
const todo = new ToDoList();
todo.addTask('test');
todo.addTask('зробити ДЗ');
todo.getTasksList();
todo.editTask('test', 'testNew');
todo.getTasksList();
todo.getTaskInfo('зробити ДЗ');
todo.setTaskDone('testNew');
todo.getTasksList();
todo.getTasksCount();
todo.getDoneTasksCount();

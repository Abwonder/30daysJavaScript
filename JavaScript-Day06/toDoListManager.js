const tasks = []; // and empty array

function addTask(task) {
    tasks.push(task); // adding item to the array
    console.log(`Added task: ${task}`);
}

function viewTasks() {
    console.log("Your tasks:"); //just a message
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`); // they did this because the task index start from zero, user see start from 1
    });
}

function removeTask(taskNumber) {
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        const removedTask = tasks.splice(taskNumber - 1, 1);
        console.log(`Removed task: ${removedTask}`);
    } else {
        console.log("Invalid task number.");
    }
}


// Example Usage
addTask("Learn JavaScript");
addTask("Build a project");
viewTasks();
removeTask(1);
viewTasks();
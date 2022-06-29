
document.getElementById("inputNewTask").addEventListener("click", newTask);

function newTask(){
    const newTask = document.getElementById("newTask").value;
    
    const taskItem = document.createElement('div');
    const taskCheck = document.createElement('input');
    const taskDescription = document.createElement('label');

    const taskNode = document.createTextNode(newTask);
    const taskWrapper = document.getElementById('taskList');

    taskCheck.setAttribute('type', 'checkbox');
    taskItem.setAttribute('class', 'taskItem');

    taskDescription.appendChild(taskNode);
    taskItem.appendChild(taskCheck);
    taskItem.appendChild(taskDescription);
    taskWrapper.appendChild(taskItem);
}

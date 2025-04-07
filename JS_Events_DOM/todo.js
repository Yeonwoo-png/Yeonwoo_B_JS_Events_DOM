let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

function createListItem(taskText) 
{
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    return listItem;
};

function addTask()
{
    let taskText = taskInput.value;
    let listItem = createListItem(taskText);

    taskList.append(listItem);

    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
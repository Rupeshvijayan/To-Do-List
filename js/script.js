//Add a new task

let formEle = document.querySelector("#form-container");
let inputEle = document.querySelector("#ip-text");
let listEle = document.querySelector("#task-data");

formEle.addEventListener("submit" , function(r){
    r.preventDefault();

    console.log(inputEle.value);

    //get the input value from inputEle
    let task = inputEle.value;
    

    //1.create a tasks element
    let taskEle = document.createElement("div");
    taskEle.classList.add("tasks");


    //2.create a checkbox element
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "ip-checkbox");

    //append checkbox into tasks element
    taskEle.appendChild(checkBox);


    //3.create a content element
    let contentEle = document.createElement("div");
    contentEle.classList.add("content");
    //create input text element
    let inputTextEle = document.createElement("input");
    inputTextEle.setAttribute("class", "new-task");
    inputTextEle.setAttribute("type", "text" );
    inputTextEle.setAttribute("value", task);
    inputTextEle.setAttribute("readonly", "readonly");

    //append inputTextEle into content element
    contentEle.appendChild(inputTextEle);
    //append contenEle into tasks element
    taskEle.appendChild(contentEle);


    //4.create task action element
    let actionEle = document.createElement("div");
    actionEle.classList.add("actions");
    //create edit button
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerText = "Edit";
    //create delete button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerText = "Delete";

    //append editButton into actionEle
    actionEle.appendChild(editButton);
    //append deleteButton into actionEle
    actionEle.appendChild(deleteButton);
    //append actionEle into tasks element
    taskEle.appendChild(actionEle);

    //append taskEle into listEle
    listEle.appendChild(taskEle);


    //edit the task
    editButton.addEventListener("click", function(){
        inputTextEle.removeAttribute("readonly");

        editButton.innerText = "Save";

        //update the task
        editButton.addEventListener("click", function(){
            inputTextEle.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
        })
    });

    //delete the task
    deleteButton.addEventListener("click", function(){
        listEle.removeChild(taskEle);
    })

    //checkbox Update
    checkBox.addEventListener("click", function(){
        if (checkBox.checked) {
            inputTextEle.style.textDecoration = "line-through";
        } else {
            inputTextEle.style.textDecoration = "none";
        }
    });
});








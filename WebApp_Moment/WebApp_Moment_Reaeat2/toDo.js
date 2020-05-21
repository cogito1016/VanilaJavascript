const toDoForm = document.querySelector(".jsToDo");
const toDoInp = toDoForm.querySelector("input");
const toDoList = document.querySelector(".jsToDoList");

const TODO_LS = "toDList";

let list = [];

function loadToDoList(){
    const getItem = JSON.parse(localStorage.getItem(TODO_LS));
    if(getItem!==null){
        getItem.forEach(element => {
            addToDoList(element.text);
        });
    }//if end
}//loadToDoList

function saveToDoList(){
    localStorage.setItem(TODO_LS,JSON.stringify(list));
}//saveToDoList() end

function addToDoList(workLabel){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=workLabel;
    const btn = document.createElement("button");
    btn.innerText="❌";
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);

    const toDoObj = {
        text:workLabel,
        id:list.length+1
    };

    list.push(toDoObj);
}//addToDoList() end

function handleToDoForm(event){
    event.preventDefault();
    const workLabel = toDoInp.value;
    toDoInp.value = "";
    addToDoList(workLabel);
    saveToDoList();
}//handleToDoForm() end

function init(){
    toDoForm.addEventListener("submit",handleToDoForm);
    loadToDoList();
}//init();

init();


const toDoForm = document.querySelector(".js-toDoForm");
const toDoInp = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LIST_LS = "todoList";

let presentlist = [];



function deleteToDoInList(id){
    const correctlist = presentlist.filter(function(element){
        if(element.id!==id)
            return 1;
    });
    presentlist=correctlist;
    saveToDoList();
}//deleteToDoInList() end

function handleDeleteBtn(event){
    const target = event.target.parentNode;
    toDoList.removeChild(target);
    deleteToDoInList(target.id);
}//handleDeleteBtn() end

function saveToDoList(){
    localStorage.setItem(TODO_LIST_LS,JSON.stringify(presentlist));
}//saveToDoList end

function addTodoList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText=text;
    button.innerText="❌";
    button.addEventListener("click",handleDeleteBtn);
    li.appendChild(span);
    li.appendChild(button);
    li.id=presentlist.length+1;
    toDoList.appendChild(li);
    const toDoObj = {
        id:li.id,
        text:text
    };
    presentlist.push(toDoObj);
    saveToDoList();
}//addTodoList() end

function loadToDoList(){
    const getList =  JSON.parse(localStorage.getItem(TODO_LIST_LS));
    if(getList===null){
        //저장된 리스트가없다
    }else{
        //저장된 리스트가 있다
        getList.forEach(element => {addTodoList(element.text);});
    }//if~ else end
}//loadTodoList() end

function handleTodoSubmit(event){
    event.preventDefault();
    addTodoList(toDoInp.value);
    toDoInp.value="";

}//handleTodoSubmit() end
function init(){
    toDoForm.addEventListener("submit",handleTodoSubmit);
    loadToDoList();
}//init() end

init();
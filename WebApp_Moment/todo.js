//자바스크립트에서 사용할 목적으로 생성하는 클래스네임을 따로 js-를 붙여 구분한다.
//괜찮은 센스, css변경목적으로 사용하는 classname을 쓰는것보다 구분하기 쉽다.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); //createElement를 통해 요소를 만들 수 있다.
    delBtn.innerText = "❌"; //UTF-8 인코딩을 사용해야하므로 HTML에 charset설정을 해줘야 함(VSCODE자동완성 짱짱맨)
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn); //appendChild를 통해 부모에 자식요소들을 추가합니다.
    li.appendChild(span);
    toDoList.appendChild(li); 
}//paintToDo() end 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}//handleSubmit() end

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos!==null){

    }//if end
}//loadTodos() end

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}//init() end

init();
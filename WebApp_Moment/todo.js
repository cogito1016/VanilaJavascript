//자바스크립트에서 사용할 목적으로 생성하는 클래스네임을 따로 js-를 붙여 구분한다.
//괜찮은 센스, css변경목적으로 사용하는 classname을 쓰는것보다 구분하기 쉽다.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];



function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;//parentNode를 통해 클릭된버튼의 부모를 얻어올 수 있다.
    toDoList.removeChild(li);//해당 HTML객체를 지운다.
    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    });//그럼 TodoList들을 다시 불러온다.
    //filter메소드는 array에서 사용할 수 있는 메소드이다. 콜백함수에서 return true가 되는 요소들만 불러와 어레이를 구성한다.
    //반복문을 써서 번거롭게할 필요없이 편리하다. array.filter().
    console.log(cleanToDos);
    toDos=cleanToDos;
    saveToDos();
}//deleteTodo() end

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // 무조건 String만 저장가능하므로 어레이를 stringify를 통해 스트링으로 변환

}//saveToDos() end

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); //createElement를 통해 요소를 만들 수 있다.
    const newId = toDos.length+1;
    delBtn.innerText = "❌"; //UTF-8 인코딩을 사용해야하므로 HTML에 charset설정을 해줘야 함(VSCODE자동완성 짱짱맨)
    delBtn.addEventListener("click",deleteTodo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn); //appendChild를 통해 부모에 자식요소들을 추가합니다.
    li.appendChild(span);
    li.id = newId; //이렇게 아이디를 줄 수 있다 .id
    toDoList.appendChild(li); 
    const toDoObj = {
        text:text,
        id:newId
    }
    toDos.push(toDoObj);
    saveToDos();
}//paintToDo() end 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}//handleSubmit() end

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos!==null){
        //로컬 스토리지는 모든것을 스트링으로 다룬다고 언급해두었다.
        //따라서 리스트여도, 그것은 스트링이다 
        //그렇기때문에 스트링을 리스트형식으로 변환해주어야한다.
        const parsedToDos = JSON.parse(loadToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){ //array에서 기본으로제공하느 메소드인 forEach를 통해 각각 접근가능
            paintToDo(toDo.text);
        });
    }//if end
}//loadTodos() end

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}//init() end

init();
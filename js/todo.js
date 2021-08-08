const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // == const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 변경이 가능하게 만듦.

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos 를 문자열로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement; // target 은 클릭된 HTML 태그이다. parentElement 는 클릭된 태그의 부모이다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo 인수의 id 가 선택된 li 의 id 와 다른 것을 반환한다.
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // li 를 만들고
    li.id = newTodo.id; // li 에 인수로 들어온 Object newTodo 의 id 를 넣는다.
    const span = document.createElement("span"); // span 을 만들고
    span.innerText = newTodo.text; // span 에 todo를 추가한다.

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 에 span 을 추가한다.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 
// 사용자가 submit 을 하면
// 입력 값을 newTodo 변수에 저장하고
// 입력 폼을 비운다.
// toDos 배열에 값을 밀어 넣고
// paintToDo();
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string 이 아닌 object 로 JavaScript 에서 사용 가능하게 만든다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // forEach 는 array 의 각 item 에 대해 function 을 실행시킨다.
    // == parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}


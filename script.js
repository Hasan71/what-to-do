//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener("click", filterTodo);


function addTodo(event){
    event.preventDefault(); // preventing form from submitting

    //todo div
    const todoDiv  = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //creating List
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    //completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"> </i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //checked Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"> </i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appending final todo list
    todoList.appendChild(todoDiv);

    //clearing form input
    //todoInput.value = "";
}

function deleteTodo(e){
    const item = e. target;

    //delete list
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        
        //animate delete
        todo.classList.add("fall");
        //todo.remove();
        todo.addEventListener('transitionend', function(){
            todo.remove();
        }); 
    }

    //check marked items
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {

    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;

        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;

        case "incompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }

      }
    });
  }
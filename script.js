//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event){
    event.preventDefault(); // preventing form from submitting

    //todo div
    const todoDiv  = document.createElement("div");
    
    //creating List
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    //checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //checked Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appending todo list
    todoList.appendChild(todoDiv);

    //clearing form input
    todoInput.value ="";
}

function deleteCheck(e){
    const item = e. target;

    //delete list
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        
        //animate delete
        todo.classList.add("fall");
        //todo.remove();
        todo.addEventListener('transitioned', function(){
            todo.remove();
        }); 
    }

    //check marked items
    if(DataTransferItemList.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



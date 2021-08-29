//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);


function addTodo(event){
    event.preventDefault(); // preventing form from submitting

    //todo div
    const todoDiv  = document.createElement("div");
    
    //creating List
    const newTodo = document.createElement('li');
    newTodo.innerText = 'ok';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //checked Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('complete-btn'); 
    todoDiv.appendChild(trashButton);

    //appending todo list
    todoList.appendChild(todoDiv);

}



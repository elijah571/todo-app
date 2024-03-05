const todoList = [ ];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {

        const todo = todoList[i];
        const {name, dueDate} = todo;

        const html = `<p>
            ${name}  ${dueDate}
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
        </p>`;
        todoListHtml += html;
    }
    document.querySelector('.js-todoList').innerHTML = todoListHtml;
}


   
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const inputDate = document.querySelector('.js-todo-dueDate');

    const dueDate = inputDate.value;
    todoList.push(
        {name, dueDate}
    );
    inputElement.value = '';
    renderTodoList();
}

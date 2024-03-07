const todoList = [ ];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    todoList.forEach((todo, i) => {
         todo = todoList[i];
        const {name, dueDate} = todo;

        const html = `
            <div>${name}</div>
            <div>  ${dueDate}</div>

            <button class="js-delete delete">Delete</button>
        `;
        todoListHtml += html;
    })
    
    document.querySelector('.js-todoList').innerHTML = todoListHtml;
    document.querySelectorAll('.js-delete')
        .forEach((deleteButton, i) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(i, 1);
                renderTodoList();
            })
        })
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

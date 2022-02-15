let input = document.querySelector('input');
let add = document.querySelector('.add');
let root = document.querySelector('ul');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let dragSrcEl = null;

// Drag And Drop
function handleDragStart(event) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
    //  var data = event.dataTransfer.getData('text/html');
    //  event.target.appendChild(document.getElementById(data));
  }
  return false;
}

function handleEnter(event) {
  event.target.classList.add('over');
}

function handleLeave(event) {
  event.target.classList.remove('over');
}

function handleDragEnd(event) {
  this.style.opacity = '1';
  this.classList.remove('over');
  root
    .querySelectorAll('li')
    .forEach((element) => element.classList.remove('over'));
  //   createUI(todos);
}

// Adding A Todo
function addTodo(event) {
  if (input.value !== '' && (event.keyCode === 13 || event.type === 'click')) {
    let todo = input.value;
    let id = `${Date.now()}`;
    todos.push({ todo, id });
    input.value = '';
    createUI(todos);
  }
}

// Deleting A Todo
function handleDelete(e, index) {
  console.log(e, index);
  delete todos[index];
  createUI(todos);
}

// Editing A Todo
function handleEdit(event, index) {
  let input = document.createElement('input');
  input.style.border = `none`;
  input.style.borderBottom = `1px solid gray`;
  input.style.outline = `none`;
  input.style.fontSize = `1.5rem`;
  input.style.fontWeight = `700`;
  input.style.fontFamily = `"Nunito", sans-serif`;
  input.value = todos[index].todo;
  input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      let updatedValue = e.target.value;
      todos[index].todo = updatedValue;
      createUI(todos);
    }
  });
  let list = event.target.parentElement.parentElement;
  let p = list.firstElementChild;
  list.replaceChild(input, p);
}

// Creating UI
function createUI(todos = []) {
  root.innerHTML = '';
  todos.forEach((elem, index) => {
    let li = document.createElement('li');
    li.setAttribute('id', `id-${Date.now()}`);
    li.classList.add('flex', 'draggable');
    li.setAttribute('draggable', 'true');

    let p = document.createElement('p');
    p.innerText = elem.todo;
    let div = document.createElement('div');
    let edit = document.createElement('i');
    edit.addEventListener('click', (event) => handleEdit(event, index));
    edit.classList.add('far', 'fa-edit', 'edit', 'padd');
    let dlt = document.createElement('i');
    dlt.classList.add('far', 'fa-trash-alt', 'delete', 'padd');
    dlt.addEventListener('click', (e) => handleDelete(e, index));
    div.append(edit, dlt);
    li.append(p, div);
    li.addEventListener('dragstart', handleDragStart, false);
    li.addEventListener('dragenter', handleEnter, false);
    li.addEventListener('dragover', handleDragOver, false);
    li.addEventListener('dragleave', handleLeave, false);
    li.addEventListener('drop', handleDrop, false);
    li.addEventListener('dragend', handleDragEnd, false);
    root.append(li);
  });
}

//  Calling createUI
createUI(todos);

// addEventListerner For Adding Todo
input.addEventListener('keyup', addTodo);
add.addEventListener('click', addTodo);
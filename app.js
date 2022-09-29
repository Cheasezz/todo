const input = document.querySelector('.input'),
  todo = document.querySelector('.todo'),
  total = document.querySelector('.total'),
  addButton = document.querySelector('.add'),
  todoList = document.querySelector('.list');

let totalCounter = 0;

function createDeleteListElement(value) {
  totalCounter++;
  const li = document.createElement('li'),
    p = document.createElement('p'),
    deleteButton = document.createElement('button'),
    completeButton = document.createElement('button');

  li.className = 'list__item';
  p.className = 'list__text';
  deleteButton.className = 'button del';
  completeButton.className = 'button comp';

  p.textContent = value;
  deleteButton.textContent = 'Delete';
  completeButton.insertAdjacentHTML(
    'afterbegin',
    `
	<i class="fa-solid fa-check"></i>
	`
  );

  li.append(completeButton, p, deleteButton);

  todoList.prepend(li);

  completeButton.addEventListener('click', () => {
    completeButton.classList.toggle('button-comp__complited');
    p.classList.toggle('list__text--complited');
    li.classList.toggle('list__item--complited');
  });

  deleteButton.addEventListener('click', () => {
    li.remove();
    totalCounter--;
    total.textContent = totalCounter;
  });

  total.textContent = totalCounter;
}

addButton.addEventListener('click', () => {
  if (input.value.trim() == '') return;
  createDeleteListElement(input.value);
  input.value = '';
});

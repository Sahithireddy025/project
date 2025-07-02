function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add complete toggle
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Create and add a remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  removeBtn.style.marginLeft = '100px';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent triggering the 'complete' toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

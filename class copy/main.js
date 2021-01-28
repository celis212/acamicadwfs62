const inputTask = document.querySelector("#inputTask")
const formAddTask = document.querySelector("#formAddTask")
const tasks = document.querySelector(".tasks")

const addTask = ev => {
	ev.preventDefault();
  const taskName = inputTask.value
  if (taskName !== "") {
  	const li = document.createElement('li')
    li.textContent = taskName
    tasks.appendChild(li)
    inputTask.value = ""
  }
}

formAddTask.addEventListener("submit", addTask)
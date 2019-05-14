const formEl = document.querySelector('#create-task-form')
const tasks = document.querySelector('#tasks')


function addTask(task){
  const li = document.createElement("li")

  li.innerHTML = task 

  tasks.appendChild(li)


}







formEl.addEventListener('submit', function(e){
  e.preventDefault()
  const task = formEl["new-task-description"].value


  if (task.length > 3){
    addTask(task)
  }  else {
    alert("nahh mate, type again.")
  }
  


  formEl.reset()



})
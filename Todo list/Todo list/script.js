const tasks=[];
const taskInput=document.getElementById('taskInput');
const addTaskbtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');
    function displayTasks(){
    
taskList.innerHTML="";
tasks.forEach(function (taskText,index){
      const task=document.createElement('div')
task.className='all-btn';
    task.innerHTML=`<input type="checkbox" class="check"> 
<span>${taskText.text}</span>
<button class="edit">Edit</button>
<button class="del">Delete</button>`;
const deleteBtn = task.querySelector(".del");
const editBtn = task.querySelector(".edit");
const checkBox = task.querySelector(".check");

checkBox.checked = taskText.completed;
   if (taskText.completed) {
            task.classList.add("completed");
        }
checkBox.addEventListener("change", function(){
    taskText.completed = checkBox.checked;
    displayTasks();
});
editBtn.addEventListener("click", function(){
const updatedTask = prompt("Edit your task",taskText.text);
   if (updatedTask !== null && updatedTask.trim() !== "") {
                taskText.text = updatedTask.trim();
                displayTasks();
            }
});
deleteBtn.addEventListener("click", function(){
tasks.splice(index, 1);
displayTasks();
});

taskList.appendChild(task);

});
    }
    addTaskbtn.addEventListener('click',function(event){
    
    event.preventDefault();
    if(taskInput.value.trim()===""){
        console.log('Enter any tasks')
    }else{
tasks.push({
    text: taskInput.value,
    completed: false
});
        // console.log(tasks);
        displayTasks();
      

taskInput.value="";
taskInput.focus();
    }
}); 

const dragFile = document.querySelectorAll(".task")
const dropContainer = document.querySelectorAll(".lines");



let currentContent;
dragFile.forEach((task) => {
    task.addEventListener("dragstart",(e)=>{
        currentContent = e.target;
        setTimeout(() =>{
            e.target.classList.add('hide')
            
        },0)
    })
    task.addEventListener("dragend",(e)=>{
        currentConten = e.target;
        e.target.classList.remove("hide");
       
        
    })
    task.addEventListener("dragleave",(e) => {
        currentContent = e.target;
        
    })

    
})

dropContainer.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        
    })
    zone.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        zone.appendChild(currentContent);
        

    })
    zone.addEventListener("drop", (e) => {
         e.preventDefault();
        zone.appendChild(currentContent);
        
      
    })
})



const myInput = document.querySelector("#myInput");
const taskDiv = document.querySelector("#toDoTask")
const mybtn =  document.querySelector(".mybtn");
const myForm = document.getElementById("addForm");



myForm.addEventListener("click",(e) => {
    e.preventDefault();
    const value = myInput.value;

    if(!value) return;
    if(value.length < 4) return;

    const newTask = document.createElement(`p`);
    
    newTask.classList.add("task");
    newTask.setAttribute("draggable","true");
    newTask.innerHTML = value;

    newTask.addEventListener("dragstart",(e)=>{
        currentContent = e.target;
        setTimeout(() =>{
            e.target.classList.add('hide')
        },0)
    })
    newTask.addEventListener("dragend",(e)=>{
        currentContent = e.target;
        e.target.classList.remove("hide");
        
    })

    taskDiv.appendChild(newTask);
   
    myInput.value = "";
});



const progressTaskDiv = document.getElementById("progessTask");
const progressTaskAdd = document.getElementById("addFormProgress");
const progressInput = document.getElementById("progressInput");


progressTaskAdd.addEventListener("click",(e) => {
    e.preventDefault();
    const value = progressInput.value;

    if(!value) return;
    if(value.length < 4) return;

    const newTask = document.createElement(`p`);
    
    newTask.classList.add("task");
    newTask.setAttribute("draggable","true");
    newTask.innerHTML = value;

    newTask.addEventListener("dragstart",(e)=>{
        currentContent = e.target;
        setTimeout(() =>{
            e.target.classList.add('hide')
            e.target.classList.remove('rotate')
        },0)
    })
    newTask.addEventListener("dragend",(e)=>{
        currentContent = e.target;
        e.target.classList.remove("hide");
        
    })

    progressTaskDiv.appendChild(newTask);
   
    progressInput.value = "";
})

const doneInput = document.getElementById("doneInput");
const doneForm = document.getElementById("doneForm");
const doneTaskDiv = document.getElementById("doneTask");

doneForm.addEventListener("click", (e) =>{
    e.preventDefault();
    const value = doneInput.value;

    if(!value) return;
    if(value.length < 4) return;

    const newTaskDone = document.createElement("p");
    newTaskDone.classList.add("task");
    newTaskDone.setAttribute("draggable", "true");
    newTaskDone.innerHTML = value;

    newTaskDone.addEventListener("dragstart", (e) => {
        currentContent = e.target;
        setTimeout(() =>{
            e.target.classList.add('hide')
            e.target.classList.remove('rotate')
        },0)
    })
    newTaskDone.addEventListener("dragend", (e) => {
        currentContent = e.target;
        e.target.classList.remove("hide");
    })

    doneTaskDiv.appendChild(newTaskDone);

    doneInput.value = "";
})




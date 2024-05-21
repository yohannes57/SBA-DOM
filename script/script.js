console.log("SBA-DOM For Dom in Js")

let allWrapper=document.getElementById('wrapperAll')
let header=document.getElementById('header');
let navBar=document.getElementById('navBar');
let login=document.getElementById('login')

let file=document.getElementById('file');
const addNewTask=document.getElementById('addNewTask');
let myTask=document.createElement('my-task');

///event
file.addEventListener('click',(e)=>{
e.preventDefault();
let title=document.createElement('h1').innerHTML="my task list";
myTask.append(title)
console.log(title)
})

///////
addNewTask.addEventListener('submit',(e)=>{
    e.preventDefault();
let titleName=addNewTask.title.value;
})


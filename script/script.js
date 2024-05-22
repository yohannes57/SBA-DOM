console.log("SBA-DOM For Dom in Js");

let allWrapper = document.getElementById("wrapperAll");
let header = document.getElementById("header");
let navBar = document.getElementById("navBar");
let login = document.getElementById("login");

let file = document.getElementById("file");

const addNewTask = document.getElementById("addNewTask");
let myTask = document.getElementById("my_task");

///file to store the task ,the user added
file.addEventListener("click", (e) => {
  e.preventDefault();

  let table = document.createElement("table");
  let tableHeader=document.createElement("ht");
  console.log("...", title);
  myTask.appendChild(title);
  console.log(title, "...title");
  // myTask[0].classList.add('flex-ctr')
});

///////

addNewTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = document.getElementById("addNewTask");
  //get value of each input
  let titleN = document.getElementById("title").value;
  let beginTime = document.getElementById("beginTime").value;
  let endTime = document.getElementById("endTime").value;
  let description = document.getElementById("desc").value;
  //;
  console.log(titleN, beginTime, endTime, description, "clicked");


  let title=document.createElement('h1');
  let begTime=document.createElement('h1');
  ///
  title.textContent=titleN;
  begTime.textContent=begTime;
  //
  myTask.appendChild(title);
  myTask.appendChild(begTime);
  //css for the myTASK
  myTask.style.display = "block";
  myTask.style.width = "80%";
  myTask.style.textAlign = "center";

  //to clear up the form
  form.reset();
});
///*****************************ADD Tasks */
let addNew = document.getElementById("addNew");
addNew.addEventListener("click", (e) => {
  e.preventDefault();
  //display the text area and user can input task
  //and the form accept the task and save to the file
  //   myTask.style.display = "block";
  let isFomrVisible=addNewTask.classList.contains('formForAdd');

  if(isFomrVisible){
    addNewTask.classList.remove("formForAdd");
    addNewTask.style.height = "0%";
    addNewTask.style.display = "none";
  }else{
    addNewTask.classList.add("formForAdd");
    addNewTask.style.height = "100%";
    addNewTask.style.display = "block";

  }
   
});

//*****************************settings */
//1,user can change the color of the text,
// user can change the backgroud color
// user can set something else
//it should let user to do some sort of effect
let settings = document.getElementById("settings");
settings.addEventListener("click", (e) => {
  e.preventDefault();

  let settingsArea = document.getElementById("settingArea");
  let isSettingVisible = settingsArea.classList.contains("setArea");

  //   console.log(",,,,", isSettingVisible);
  if (isSettingVisible) {
    settingsArea.classList.remove("setArea");
    settingsArea.style.height = "0%";
    settingsArea.style.display = "none";
  } else {
    settingsArea.classList.add("setArea");
    settingsArea.style.height = "100%";
    settingsArea.style.display = "block";

    ////////////
    ///only once it has to displayed ,it should replace ?
    if (!document.getElementById("changeCol")) {
      const changeCol = document.createElement("h4");
      changeCol.setAttribute("id", "chgCol");
      changeCol.innerHTML = "<h4>choice color</h4>";
      changeCol.classList.add("changeCol");
      settingsArea.appendChild(changeCol);
    }

    ///////////
    if (!document.getElementById("colOne")) {
      const colorOne = document.createElement("button");
      colorOne.setAttribute("id", "colOne");
      colorOne.textContent = "red";
      colorOne.classList.add("colOne");
      settingsArea.appendChild(colorOne);
      colorOne.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allWrapper.style.backgroundColor = "red";
        // allWrapper.classList.add("colOne");
      });
      // colorOne.addEventListener('click',colorHandler(colorOne.textContent))
    }
    if (!document.getElementById("colTwo")) {
      const colorTwo = document.createElement("button");
      colorTwo.setAttribute("id", "colTwo");
      colorTwo.textContent = "green";
      colorTwo.classList.add("colTwo");
      settingsArea.appendChild(colorTwo);
      colorTwo.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allWrapper.style.backgroundColor = "green";
        // allWrapper.classList.add("colTwo");
      });
    }
    if (!document.getElementById("colThree")) {
      const colorThree = document.createElement("button");
      colorThree.setAttribute("id", "colThree");
      colorThree.textContent = "yellow";
      colorThree.classList.add("colThree");
      settingsArea.appendChild(colorThree);
      colorThree.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allWrapper.style.backgroundColor = "yellow";

        // allWrapper.classList.add("colThree");
      });
    }
  }
});
///////////////color handler

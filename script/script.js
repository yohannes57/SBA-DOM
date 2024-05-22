console.log("SBA-DOM For Dom in Js");

let allWrapper = document.getElementById("wrapperAll");
let header = document.getElementById("header");
let navBar = document.getElementById("navBar");
let login = document.getElementById("login");

let file = document.getElementById("file");

const addNewTask = document.getElementById("addNewTask");
let myTask = document.getElementById("my_task");

///event
file.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.createElement("h1");
  title.innerHTML = "my task list";
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
  myTask.append(titleN);
  //css for the myTASK
  myTask.style.display = "flex";
  myTask.style.width = "80%";
  myTask.style.textAlign = "center";

  //to clear up the form
  form.reset();
});
///*****************************ADD Tasks */
let addNew = document.getElementById("addNewTask");
addNew.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("add clicked");
  //display the text area and user can input task
  //and the form accept the task and save to the file
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
        // allWrapper.style.backgroundColor = "green";
        allWrapper.classList.add("colOne");
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
        // allWrapper.style.backgroundColor = "red";
        allWrapper.classList.add("colTwo");
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
        // allWrapper.style.backgroundColor = "red";
        allWrapper.classList.add("colThree");
      });
      // c
      //   colorOne.addEventListener("click", colorHandler(colorOne.textContent));
    }
  }
});
///////////////color handler
// function colorHandler(colo) {
//     colo.preventDefault();
//     if (colo == "red") {
//         colo.
//     }
// }

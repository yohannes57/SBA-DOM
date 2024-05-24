// var fs = require("fs");

console.log("SBA-DOM For Dom in Js");
let allWrapper = document.getElementById("wrapperAll");
// let header = document.getElementById("header");
let navBar = document.getElementById("navBar");
let login = document.getElementById("login");

let file = document.getElementById("file");

const addNewTask = document.getElementById("addNewTask");
let myTask = document.getElementById("my_task");
//****************************Header navigation bar */
let headerNav = ["File", "Add-New", "Setting"];
let loginSignUp = ["SignUp", "Login"];
//
let headUl = document.createElement("ul");
//);
let header = document.getElementById("header");
header.style.height = "100%";
header.style.backgroundColor = "var(--top-menu-bg)";
header.classList.add("header");
let TopMenu = document.getElementById("topMenu");
navBar.classList.add("naveBar");
//
function assignLinks(links) {
  links.forEach((link) => {
    let aLink = document.createElement("a");
    console.log("link", link);
    aLink.textContent = link;
    aLink.classList.add("ancho");
    //
    let headLi = document.createElement("li");
    headLi.appendChild(aLink);

    headUl.appendChild(headLi);
    console.log("ul", headUl);
  });
  TopMenu.appendChild(headUl);
}
console.log(navBar);
assignLinks(headerNav);
assignLinks(loginSignUp);

// ****************************
///data to be store for a sample to show how tasks will be stored  ,the user added
let saveData = [
  {
    title: "SBA",
    beginTime: Date(),
    endTime: Date() + 1,
    description: "has to done to friday ",
  },
  {
    title: "KBA",
    beginTime: Date(),
    endTime: Date() + 1,
    description: "have to study for kba  ",
  },
  {
    title: "LAB",
    beginTime: Date(),
    endTime: Date() + 1,
    description: "tha lab has to be submite on time",
  },
];
let cout = 0;
file.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(saveData.length, " length");
  const tableBody = document.querySelector("#my_task tbody");
  if (cout < 1) {
    for (let i = 0; i < saveData.length; i++) {
      let saveFile = createTable(saveData[i]);
      tableBody.appendChild(saveFile);
      myTask.appendChild(tableBody);
    }
  }
  cout += 1;
});
//form eventListener
addNewTask.addEventListener("submit", addRow);
///*****************************ADD Tasks */
//To Add new task ,press addNew button
let addNew = document.getElementById("addNew");
addNew.addEventListener("click", (e) => {
  e.preventDefault();
  let isFomrVisible = addNewTask.classList.contains("formForAdd");
  if (isFomrVisible) {
    addNewTask.classList.remove("formForAdd");
    addNewTask.style.height = "0%";
    addNewTask.style.display = "none";
  } else {
    addNewTask.classList.add("formForAdd");
    addNewTask.style.height = "100%";
    addNewTask.style.display = "block";
    addRow();
  }
});
//***************create table */
function createTable(data) {
  let row = document.createElement("tr");
  Object.values(data).forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });
  console.log("row ..", row);
  return row;
}
//add a new row with value
function addRow(e) {
  e.preventDefault();
  let title = document.getElementById("title");
  let beginTime = document.getElementById("beginTime");
  let endTime = document.getElementById("endTime");
  let description = document.getElementById("desc");

  const newRowData = {
    title: title.value,
    beginTime: beginTime.value,
    endTime: endTime.value,
    description: description.value,
  };
  console.log(title.value);
  console.log(beginTime.value);
  console.log(endTime.value);
  console.log(description.value);

  const tableBody = document.querySelector("#my_task tbody");
  const newRow = createTable(newRowData);
  console.log(newRow, ".....newRow .");
  tableBody.append(newRow);

  //reset value
  title.value = "";
  beginTime.value = "";
  endTime.value = "";
  description.value = "";
}

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
    const changeCol = document.createElement("h4");
    if (!document.getElementById("changeCol")) {
      changeCol.setAttribute("id", "chgCol");
      changeCol.innerHTML = "<h4>choice color</h4>";
      changeCol.classList.add("changeCol");
      settingsArea.appendChild(changeCol);
      changeCol.innerHTML = "";
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
    //reset to orginal color
    if (!document.getElementById("resetColor")) {
      const resCol = document.createElement("button");
      resCol.setAttribute("id", "resetColor");
      resCol.textContent = "gray";
      resCol.classList.add("resetColor");
      settingsArea.appendChild(resCol);
      resCol.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        allWrapper.style.backgroundColor = "gray";

        // allWrapper.classList.add("colThree");
      });
    }
  }
});
///////////////color handler

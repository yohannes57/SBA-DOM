console.log("SBA-DOM For Dom in Js");
let allWrapper = document.getElementById("wrapperAll");
let navBar = document.getElementById("navBar");
let login = document.getElementById("login");
//
const addNewTask = document.getElementById("addNewTask");
let myTask = document.getElementById("my_task");

//****************************Header navigation bar */
//creat nav links in array object format
let headerNav = [
  { text: "File", href: "#" },
  { text: "Add-New", href: "#" },
  { text: "Setting", href: "#" },
];
let loginSignUp = [
  { text: "SignUp", href: "#" },
  { text: "Login", href: "#" },
];
//assign left and right to hold navBar and signLogin part
let headUlLeft = document.createElement("ul");
let headUlRight = document.createElement("ul");

let header = document.getElementById("header");
header.style.height = "100%";
header.style.backgroundColor = "var(--top-menu-bg)";
header.classList.add("header");

//This is use to sanitizedId to assign ,id dynamically
function sanitizeId(text) {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]/g, "") // Remove all non-alphanumeric characters except hyphens and underscores
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}
//////////// assign links array to nav
function assignLinks(links, headUl) {
  links.forEach((link) => {
    let aLink = document.createElement("a");
    console.log("link", link);
    aLink.textContent = link.text;
    aLink.href = link.href;
    // aLink.classList.add("nav");
    aLink.id = sanitizeId(link.text);

    //append anchor to list
    let headLi = document.createElement("li");
    headLi.appendChild(aLink);

    //  append list into ul
    headUl.appendChild(headLi);
    console.log("ul", headUl);
  });
}
//assign left and right nav bar
assignLinks(headerNav, headUlLeft);
assignLinks(loginSignUp, headUlRight);
navBar.appendChild(headUlLeft);
login.appendChild(headUlRight);
//append left and right to header
header.appendChild(navBar);
header.appendChild(login);

// **************************************************************
///accessing all navBar with getElementById and assign event for each
let fileLink = document.getElementById("file");
let addNewLink = document.getElementById("add-new");
let settingLink = document.getElementById("setting");

//right
let signUpLink = document.getElementById("signup");
let loginLink = document.getElementById("login");
//
//sample data to be saved in File
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
//
//signUP and ligin Links
//signUP
signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); //stop bubbling effect

  console.log("signUp clicked"); //listened
  let loginSignUp = document.getElementById("loginSignup");

  // Check if the form already exists
  let signForm = loginSignUp.querySelector(".sign-up-form");
  if (signForm) {
    if (signForm.style.display === "none" || signForm.style.display === "") {
      signForm.style.display = "block";
    } else {
      signForm.style.display = "none";
    }
  } else {
    signForm = document.createElement("form");
    signForm.classList.add("sign-up-form");
    signForm.style.height = "100%";
    signForm.style.display = "block";

    let userNameInput = document.createElement("input");
    userNameInput.setAttribute("type", "text");
    userNameInput.setAttribute("placeholder", "username");
    userNameInput.required = true;
    userNameInput.classList.add("name");
    signForm.appendChild(userNameInput);

    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Email");
    emailInput.classList.add("email");
    emailInput.required = true;
    signForm.appendChild(emailInput);

    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "text");
    passwordInput.setAttribute("placeholder", "Password");
    passwordInput.classList.add("password");
    passwordInput.required = true;
    signForm.appendChild(passwordInput);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerHTML = "signUp";
    submitButton.classList.add("submit");
    signForm.appendChild(submitButton);

    submitButton.addEventListener("submit", (e) => {
      e.preventDefault();
      window.prompt("thank you for sign up,enjoy the application ....:)");
    });

    loginSignUp.appendChild(signForm);

    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
});

//login
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("login clicked"); //listened
});

//
let cout = 0;
//****************add event listener for File
fileLink.addEventListener("click", (e) => {
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
//
//*********************attach even for form
addNewTask.addEventListener("submit", addRow);
//
///*****************************ADD Tasks */
//add eventListener for Add-new navBar to add and minimized form
addNewLink.addEventListener("click", (e) => {
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
  }
});
//
//***************create table to hold file*/
function createTable(data) {
  let row = document.createElement("tr");

  // Create cells for the data
  Object.values(data).forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
    cell.classList.add("eachInput");
    console.log(cell.getAttribute);
  });

  // Create Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    editRow(row, data);
  });
  const editCell = document.createElement("td");
  editCell.appendChild(editButton);
  row.appendChild(editCell);

  // Create Remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    row.remove();
  });
  const removeCell = document.createElement("td");
  removeCell.appendChild(removeButton);
  row.appendChild(removeCell);

  console.log("row ..", row);
  return row;
}
// Function to edit a row
function editRow(row, data) {
  Array.from(row.cells).forEach((cell, index) => {
    if (index < Object.keys(data).length) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = cell.textContent;
      cell.textContent = "";
      cell.appendChild(input);
    }
  });

  // Change the Edit button to a Save button
  const editButton = row.querySelector("button");
  editButton.textContent = "Save";
  editButton.removeEventListener("click", editRow);
  editButton.addEventListener("click", () => {
    saveRow(row, data);
  });
}

// Function to save the edited row
function saveRow(row, data) {
  const inputs = row.querySelectorAll("input");
  console.log(inputs, "..class of eachinput");
  inputs.forEach((input, index) => {
    const key = Object.keys(data)[index];
    data[key] = input.value;
  });

  // Replace input fields with updated text content
  inputs.forEach((input) => {
    const cell = input.parentElement;
    cell.textContent = input.value;
  });

  // Change the Save button back to an Edit button
  const saveButton = row.querySelector("button");
  saveButton.textContent = "Edit";
  saveButton.removeEventListener("click", saveRow);
  saveButton.addEventListener("click", () => {
    editRow(row, data);
  });
}
//add a new row with value
function addRow(e) {
  e.preventDefault();
  let title = document.getElementById("title");
  let beginTime = document.getElementById("beginTime");
  let endTime = document.getElementById("endTime");
  let description = document.getElementById("desc");
  let newRowData = {};
  //validations
  if (title.value.length >= 4) {
    newRowData.tile = title.value;
  } else {
    window.prompt("your title is too short to make sense");
    return;
  }
  if (beginTime.value < endTime.value) {
    newRowData.beginTime = beginTime.value;
    newRowData.endTime = endTime.value;
  } else {
    window.prompt(
      `begin date ${beginTime.value} should precede end data ${endTime.value}`
    );
    return;
  }
  newRowData.description = description.value;

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
let savedFile = document.querySelector("#savedFile");
settingLink.addEventListener("click", (e) => {
  e.preventDefault();
  let settingsArea = document.getElementById("settingArea");
  let isSettingVisible = settingsArea.classList.contains("setArea");
  // console.log(",,,,", isSettingVisible);
  if (isSettingVisible) {
    settingsArea.classList.remove("setArea");
    settingsArea.style.height = "0%";
    settingsArea.style.display = "none";
  } else {
    settingsArea.classList.add("setArea");
    settingsArea.style.height = "100%";
    settingsArea.style.display = "block";
    ///////
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
        header.style.backgroundColor = "red";
        savedFile.style.backgroundColor = "red";
        savedFile.style.color = "white";
        // allWrapper.classList.add("colOne");
      });
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
        header.style.backgroundColor = "green";
        savedFile.style.backgroundColor = "green";
        savedFile.style.color = "red";
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
        header.style.backgroundColor = "yellow";
        savedFile.style.backgroundColor = "yellow";
        savedFile.style.color = "white";

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
        header.style.backgroundColor = "gray";
        savedFile.style.backgroundColor = "gray";
        savedFile.style.color = "black";
        // allWrapper.classList.add("colThree");
      });
    }
  }
});
//end of setting

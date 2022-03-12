import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  remove,
  set
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK0bkZPGr4jcPjo9hjHf-Uiy_kqO7cikU",

  authDomain: "hrsm-c9de7.firebaseapp.com",

  databaseURL: "https://hrsm-c9de7-default-rtdb.firebaseio.com",

  projectId: "hrsm-c9de7",

  storageBucket: "hrsm-c9de7.appspot.com",

  messagingSenderId: "252589889131",

  appId: "1:252589889131:web:617f612f7b5191d5cac32e",

  measurementId: "G-MWE9TSF96W",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const DBref = getDatabase(app);

const AllEmployeeDB = ref(DBref, "AllEmployee");

onValue(AllEmployeeDB, (snapshot) => {
  DisplayAllEmployee(snapshot.val());
});

function DisplayAllEmployee(AllEmployee) {
  let table = document.querySelector("#newEmployeeTable tbody");

  table.innerHTML = `<tr>
    <th>Employee First Name</th>
    <th>Employee Last Name</th>
    <th>Employee Email ID</th>
    <th>Actions</th>
  </tr>`;

  for (const employee in AllEmployee) {
    /* AllEmployee[employee] */
    table.innerHTML += `
    <tr class="${employee}">
      <td class="userFirstName">${AllEmployee[employee].FirstName}</td>
      <td class="userLastName">${AllEmployee[employee].LastName}</td>
      <td class="userEmail">${AllEmployee[employee].Email}</td>
      <td id="${employee}" >
        <input class="update" type="submit" value="Update" />
        <input class="delet" type="reset" value="Delet" />
        <input class="view" type="submit" value="view" />
      </td>
    </tr>
    `;
    /* document.querySelector(`#${employee} .delet`)
    .addEventListener("click" , (e)=>{
      e.preventDefault();
      console.log("hellop");
    }) */
  }

  const allBtnDelete = document.querySelectorAll(".delet");
  console.log(allBtnDelete);
  allBtnDelete.forEach(el => {
    el.addEventListener("click" , ()=>{
      console.log(el.parentNode.id);
      removeEmployee(el.parentNode.id);
    })
  })

  const allBtnUpdate = document.querySelectorAll(".update");
  allBtnUpdate.forEach(el => {
    el.addEventListener("click" , ()=>{
      showupdate();
      document.querySelector(`.formupdate`).id = el.parentNode.id;
      document.querySelector(`.formupdate #Nom`).value = document.querySelector(`.${el.parentNode.id} .userFirstName`).textContent;
      document.querySelector(`.formupdate #Prénom`).value = document.querySelector(`.${el.parentNode.id} .userLastName`).textContent;
      document.querySelector(`.formupdate #email`).value = document.querySelector(`.${el.parentNode.id} .userEmail`).textContent;
    })
  })

}



function addEmployee(FirstName, LastName, Email) {
  let newEmployee = {
    Email: Email,
    FirstName: FirstName,
    LastName: LastName,
  };

  push(AllEmployeeDB, newEmployee);
}

const validerrBtn = document.querySelector(".valider");

let nameInput = document.querySelector("#Nom");
let lastnameInput = document.querySelector("#Prénom");
let emailInput = document.querySelector("#email");

validerrBtn.addEventListener("click", () => {
  let name = nameInput.value;
  let lastName = lastnameInput.value;
  let email = emailInput.value;

  addEmployee(name, lastName, email);
})

function removeEmployee(id) {
  const db = ref(DBref, `AllEmployee/${id}`);
  remove(db);
}

function updateEmployee(id , name, lastName, email) {

  let newEmployee = {
    Email: email,
    FirstName: name,
    LastName: lastName,
  };


  const db = ref(DBref, `AllEmployee/${id}`);
  set(db , newEmployee);
}

let btnUpdate = document.querySelector(".formupdate .valider");

btnUpdate.addEventListener("click" , ()=>{
  let id = document.querySelector(`.formupdate`).id;
  updateEmployee(id , document.querySelector(`.formupdate #Nom`).value,document.querySelector(`.formupdate #Prénom`).value ,document.querySelector(`.formupdate #email`).value)
})
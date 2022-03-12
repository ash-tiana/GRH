import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
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

const DashboardDB = ref(DBref, "DashBoard");

onValue(DashboardDB, (snapshot) => {
  changeDashboard(snapshot.val());
  console.log(snapshot.val());
});

function changeDashboard(value) {
  let totalEmployee = document.getElementById("newEmployee");
  let newEmployee = document.getElementById("totalEmployee");

  totalEmployee.innerText = value.totalEmployee;
  newEmployee.innerText = value.newEmployer;
}

const form = document.querySelector(".form");
const addEmployeeBtn = document.querySelector(".AddEmployee");


const annulerBtn = document.querySelector(".form .Annuler");
const validerrBtn = document.querySelector(".form .valider");


addEmployeeBtn.addEventListener('click' , show);
annulerBtn.addEventListener('click' , hide);
validerrBtn.addEventListener('click' , hide);

function show(){
    form.style.display = "block";
    document.querySelector(`.form #Nom`).value = "";
    document.querySelector(`.form #Prénom`).value = "";
    document.querySelector(`.form #email`).value = "";
}

function hide(){
    form.style.display = "none";
}

const formupdate = document.querySelector(".formupdate");
const updateBtn = document.querySelector(".update");

const annulerBtnupdate = document.querySelector(".formupdate .Annuler");
const validerBtnupdate = document.querySelector(".formupdate .valider");

annulerBtnupdate.addEventListener("click" , hideupdate);
validerBtnupdate.addEventListener("click" , hideupdate);

function showupdate(){
    formupdate.style.display = "block";
}

function hideupdate(){
    formupdate.style.display = "none";
}


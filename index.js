//=============index=======//
const userPassword = "1710";

function login() {
 const userInput = document.getElementById("password").value;

 if (userInput === userPassword) {
  sessionStorage.setItem("auth", "true");
  window.location.href = "pages/home/index.html";
 } else {
  alert("Ооопс, видимо Вы ввели не верный пароль");
 }
}
//=============index=======//

//===========home============//
function choiceDrink() {
 window.location.href = "../catalog/catalog.html";
}

//===========home============//

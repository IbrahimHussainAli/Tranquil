console.log("hello");

function menuFunction() {
  var x = document.getElementById("nav-menu");
  if (x.className === "mainMenu") {
    x.className += " responsive";
  } else {
    x.className = "mainMenu";
  }
}

/* This menu was taken from Jason Brewer (2020) of Devslopes's 
Advanced HTML/CSS tutorial. */

function dropdownMenu() {
  var x = document.getElementById("dropdownClick");

  if (x.className === "topmenu") {
    x.className += " responsive";
    /* Change topmenu to topmenu.responsive */
  } else {
    x.className = "topmenu";
  }
}

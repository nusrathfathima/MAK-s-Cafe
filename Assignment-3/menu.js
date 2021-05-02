$(document).ready(function () {
  // Initializing jQuery Accordion widget with certain options 
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
  });
});

// DOM Events mouseover and mouseout are called in this function
window.onload = function () {
  var x = document.getElementById("test");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("mouseout", newFunction);
}

// This function is implemented when the mouse is over the navigation links
function myFunction(event) {
  event.target.style.color = "#003333";
}

// This function gets implemented when mouse is not on the navigation links
function newFunction(event) {
  event.target.style.color = "";
}
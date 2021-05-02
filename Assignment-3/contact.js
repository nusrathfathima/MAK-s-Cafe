// DOM Events submit, mouseover and mouseout are called in this function
window.onload = function () {
  var form = document.getElementById("form_contact");
  form.addEventListener("submit", onClickSubmit);
  var x = document.getElementById("test");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("mouseout", newFunction);

}

// Following function displays the alert after submitting the form
function onClickSubmit() {
  alert("Thank you for submitting your feedback. We will get back to you.");
}

// This function is implemented when the mouse is over the navigation links
function myFunction(event) {
  event.target.style.color = "#003333";
}

// This function gets implemented when mouse is not on the navigation links
function newFunction(event) {
  event.target.style.color = "";
}


// Following function displays the alert after submitting the form
function onClickSubmit() {
    alert("Thank you for submitting your feedback. We will get back to you.");
  }
// DOM submit event calling onClickSubmit function
  window.onload = function () {
    var form = document.getElementById("form_contact");
    form.addEventListener("submit", onClickSubmit);
  }
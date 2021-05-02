$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      "q": "Charlotte,USA",
      "appid": "5bfa3c2f5b055da3b38fae69e7159ff9",
      "units": "imperial"
    },
    success: function (data) {
      console.log("SUCCESS");
      console.log(data.main.temp);
      var html = "";
      html += "<h3>" + "Temperature"  +  "</h3>";
      $("#temperature").html(html);
    },
    error: function (response) {
      console.log("Request Failed");
    }
  });
});
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





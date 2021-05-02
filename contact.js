// Ajax Request for accessing weather API data
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
      var html = "";
      icon_url = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      html += "<h3>" + "Current Weather" + "</h3>" + "<img src='" + icon_url + "'>" +
        "<p> <i>" + "<b>" + data.weather[0].main + " -" + "</b>" + "- " +
        data.weather[0].description + "</b>" + "<br>" +
        "</i></p>" +
        "<p> <i>" + "Temperature : " + "<b>" + data.main.temp + "&#8457;" + "</b>" + "  " +
        " Humidity : " + "<b>" + data.main.humidity + "&#37;" + "</b>" + "<br>" +
        "</i></p>";

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





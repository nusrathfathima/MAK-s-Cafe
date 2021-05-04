$(document).ready(function () {
  // Ajax request to get data from a JSON file
  $.ajax({
    type: "get",
    url: "menu.json",
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      // Code to display menu data in Accordion
      var html = "";
      $.each(data, function (key, value) {
        html += '<h3 class="menu_head">' + key + "</h3>";
        html += '<div class="app">';
        for (i = 0; i < value.length; i++) {
          html +=
            "<p> <strong>" +
            value[i].name +
            "</strong> --- <em>" +
            value[i].price +
            "</em></br>" +
            "<small>" +
            value[i].description +
            "</small>" +
            "</p>";
        }
        html += "</div>";
      });
      $("#accordion").html(html);
      // Initializing jQuery Accordion widget with certain options
      $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
      });
    },
  });
});

// DOM Events mouseover and mouseout are called in this function
window.onload = function () {
  var x = document.getElementById("test");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("mouseout", newFunction);
};

// This function is implemented when the mouse is over the navigation links
function myFunction(event) {
  event.target.style.color = "#003333";
}

// This function gets implemented when mouse is not on the navigation links
function newFunction(event) {
  event.target.style.color = "";
}

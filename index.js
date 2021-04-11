// DOM Events click, mouseover and mouseout are called in this function
window.onload = function () {
  var element = document.getElementById("button");
  element.addEventListener("click", menuButton);
  var x = document.getElementById("test");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("mouseout", newFunction);
};

// Following function works when the button on the menu page is clicked and this function directs users to menu's page
function menuButton() {
  location.href = "./menu.html";
}

// This function is implemented when the mouse is over the navigation links
function myFunction(event) {
  event.target.style.color = "#003333";
}

// This function gets implemented when mouse is not on the navigation links
function newFunction(event) {
  event.target.style.color = "";
}

// This function is ready when the document is loaded
$(document).ready(function () {

  // Applying or initiating bxSlider plugin
  $("#slider-area").bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    captions: true,
    randomStart: true,
    speed: 3000,
    adaptiveHeight: true,
    slideWidth: 500,
    slideMargin: 10
  });

  // Initiating AOS plugin
  AOS.init();

});


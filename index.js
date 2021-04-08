
// Following function works when the button on the menu page is clicked and this function directs users to menu's page
function menuButton() {
  location.href = "./menu.html";
}

// This function is ready when the document is loaded
$(document).ready(function(){
  // Applying or initiating bxSlider plugin
  $("#slider-area").bxSlider({
    auto:true,
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


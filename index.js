// DOM click Event calling menuButton function
window.onload = function () {
  var element = document.getElementById("button");
  element.addEventListener("click", menuButton);
  };

// Following function works when the button on the menu page is clicked and this function directs users to menu's page
function menuButton() {
  location.href = "./menu.html";
}

// This function is ready when the document is loaded
$(document).ready(function(){

// DOM each event to preload the images of popular items
  $(".col-lg-4 img").each(function(){
    var img = new Image();
    img.src = $(this).attr("src");
  })

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


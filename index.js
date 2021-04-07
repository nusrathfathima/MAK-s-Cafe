// Following function displays the alert after submitting the form
function onClickSubmit() {
  alert("Thank you for submitting your feedback. We will get back to you.");
}

// Following function works when the button on the menu page is clicked and this function directs users to menu's page
function menuButton() {
  location.href = "./menu.html";
}

$(document).ready(function(){
  $("#slider-area").bxSlider({
    mode: 'fade',
    auto:true,
    minSlides: 1,
    maxSlides: 1,
    captions: true,
    randomStart: true,
    speed: 3000,
    adaptiveHeight: true,
    slideWidth: 500
  });

});
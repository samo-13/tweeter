// $(document).ready runs a callback when the DOM is ready to be manipulated with jQuery. Without it we might accidentally try to access HTML elements that the browser hasn't had the chance to load, causing errors.
$(document).ready(function() { // don't execute anything until the DOM loads
  let maxCharacters = 140;
  
  $("#tweet-text-area").keyup(function() {
    let characterLength = maxCharacters - $(this).val().length;
    
  $(".counter").text(characterLength); // display the characterLength value in he counter 
  $(".counter").css("color", (characterLength < 0) ? "red" : "black"); // change counter text color to red if less than 0 remaining
  })
});
$(document).ready(function() {
  let maxCharacters = 140;
  
  $("#tweet-text-area").keyup(function() { // the keyup event is sent to an element when the user releases a key on the keyboard
    let characterLength = maxCharacters - $(this).val().length; // https://api.jquery.com/val/
    
    $(".counter").text(characterLength); // display the characterLength value in he counter 
    $(".counter").css("color", (characterLength < 0) ? "red" : "black"); // change counter text color to red if less than 0 remaining
  })
});
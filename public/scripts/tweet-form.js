// $(document).ready runs a callback when the DOM is ready to be manipulated with jQuery. Without it we might accidentally try to access HTML elements that the browser hasn't had the chance to load, causing errors.
$(document).ready(function() { // don't execute anything until the DOM loads
  
  $("#tweet-text-area").keyup(function() { // the keyup event is sent to an element when the user releases a key on the keyboard
    let characterLength = $(this).val().length; // https://api.jquery.com/val/
    console.log('characterLength', characterLength)

    // if (characterLength > 0) {
    //   $('label').hide();
    // }
  })
});
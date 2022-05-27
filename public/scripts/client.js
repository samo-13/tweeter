/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const $tweet = $(`<article class="tweet">Hello world</article>`);

$(document).ready(function() {
  // this callback runs once the document is "ready"
  console.log('ready');

  let createTweetElement = function() {
    $tweet.show();
  }
});

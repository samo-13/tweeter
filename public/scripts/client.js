/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $('.too-many-chars').hide();
  $('.empty-form').hide();

  const createTweetElement = (tweet) => {
    const $tweet =
        $(`
        <div id="each-tweet">
          <header class="tweet-whole">
            <div class="tweet-left">
            <img id="user-icon" src="${tweet.user.avatars}">
            <h2 id="user-name">${tweet.user.name}</h2>
            </div>
            <div id="user-handle">${tweet.user.handle}</div>
          </header>
          <div class="tweet-content">${tweet.content.text}</div>
          <footer class="tweet">
            <div id="day-count">${timeago.format(tweet.created_at)}</div>
            <div id="social-icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>        
              <i class="fa-solid fa-heart"></i>
            </div>
        </footer>
        </div>
      `);
    return $tweet;
  };

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
      .then(function(tweets) {
        renderTweets(tweets);
      });
  };

  const renderTweets = (tweets) => {
    for (let i = 0; i < tweets.length; i++) {
      let tweet = tweets[i];
      tweet = createTweetElement(tweet);
      $('article').prepend(tweet);
    }
  };

  // set up event listener for submit event
  $('form').on('submit', function(eventHandler) {
    eventHandler.preventDefault();
    let tweet = $(this).serialize();
  
    if (tweet.length >= 146) { // add 5 due to tweet=
      $(".empty-form").hide();
      $(".too-many-chars").slideDown("slow");
      return; // stops error tweet from being created
    }

    if (tweet.length - 5 === 0) { // - 5 removes the tweet= characters
      $(".too-many-chars").hide();
      $(".empty-form").slideDown("slow");
    }

    $("<textarea>").text(tweet);
    $.ajax({ // ajax method sends the data to the server
      method: 'POST',
      url: '/tweets',
      data: tweet,

      success: (tweet) => {
        // hide error messages if shown
        $(".too-many-chars").hide();
        $(".empty-form").hide();

        // empty form & reset counter if submission is successful
        $('.form').trigger("reset");
        $(".counter").val("140");

        // do not remove to avoid loading tweet duplicates
        $("article").empty();
        loadTweets();
      },
      error: (error) => {
      }
    });
  });
  loadTweets();
});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    // Fake data taken from initial-tweets.json
    const data = [
      {
        "user": {
          "name": "Newton",
          "avatars": "https://i.imgur.com/73hZDYK.png"
          ,
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]

  const renderTweets = (tweets) => {
    for(let i = 0; i < data.length; i++) { // loops through tweets
      let tweet = data[i]
      const $tweet = createTweetElement(tweet); // calls createTweetElement for each tweet
      $('#tweets-container').append($tweet);// takes return value and appends it to the tweets container
      // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }}

    const createTweetElement = (tweet) => {
    // code creating the tweet element

    const $tweet =
      $(`
      <article class="tweet">
      <header id="tweet">
        <div class="left">
        <img id="user-icon" src="${tweet.user.avatars}">
        <h2 id="user-name">${tweet.user.name}</h2>
        </div>
        <h2 id="user-handle">${tweet.user.handle}</h2>
      </header>
        <h3 class="tweet-content">${tweet.content.text}</h3>
      <footer class="tweet">
        <h3 id="day-count">${tweet.created_at}</h3>
      <div id="social-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>        
        <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>
    `)

    return $tweet;

  };

  renderTweets(data);
  
});

// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// const tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


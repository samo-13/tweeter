/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    // Fake data taken from initial-tweets.json
    // const data = [
    //   {
    //     "user": {
    //       "name": "Newton",
    //       "avatars": "https://i.imgur.com/73hZDYK.png"
    //       ,
    //       "handle": "@SirIsaac"
    //     },
    //     "content": {
    //       "text": "If I have seen further it is by standing on the shoulders of giants"
    //     },
    //     "created_at": 1461116232227
    //   },
    //   {
    //     "user": {
    //       "name": "Descartes",
    //       "avatars": "https://i.imgur.com/nlhLi3I.png",
    //       "handle": "@rd" },
    //     "content": {
    //       "text": "Je pense , donc je suis"
    //     },
    //     "created_at": 1461113959088
    //   }
    // ]

    // real data  from data/initial-tweet

    const createTweetElement = (tweet) => {
    // code creating the tweet element
      const $tweet =
        $(`
        <article>
          <header class="tweet-whole">
            <div class="tweet-left">
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
      console.log('createTweetElement tweet:', $tweet);
      return $tweet;
    };

    const loadTweets = function() {
      console.log('loadTweets function')

          $.ajax({ 
            url: '/tweets',
            method: 'GET' 
          })

          .then(function(tweets) {
            console.log('Success: See tweets', tweets);
           renderTweets(tweets);
          })
    }
    
    loadTweets();


    const renderTweets = (tweets) => {
      console.log('renderTweets tweets:', tweets)
      for(let i = 0; i < tweets.length; i++) { // loops through tweets
        console.log('renderTweets tweets:', tweets);
        console.log('renderTweets tweets[i]:', tweets[i]);
        let tweet = tweets[i]
        tweet = createTweetElement(tweet); // calls createTweetElement for each tweet
        console.log('renderTweets createTweetElement tweet:', tweet);
        $('#tweets-container').append(tweet);// takes return value and appends it to the tweets container
        // to add it to the page so we can make sure it's got all the right elements, classes, etc.
      }
    }

    // set up event listener for submit event    
    // e = event handler
    $('form').on('submit', function(e) {
      // inside event handler -- prevent default form submission behaviour
      e.preventDefault();
      // get data from the form
      // data is formatted as a query string (https://en.wikipedia.org/wiki/Query_string)
      // common format of a query string is field-value pairs field1=value1&field2=value2
      // jQuery .serialize() function turns a set of form data into a query string
      // the serialized data should be sent to the server in the data field of the AJAX POST request
      let tweet = $(this).serialize();
      console.log('this.text:', this.text);
      console.log('this:', this)
      console.log('tweet:', tweet)
      // ajax method sends the data to the server
      $.ajax({
        // type of request
        method: 'POST',
        // where the request is sent
        url: '/tweets',
        // data to send
        data: tweet,
        // change the tweets html element to show the new tweet
        success: (tweet) => {
          console.log('request succeeded see tweet:', tweet);
          loadTweets();
        },
        error: (error) => {
          console.log('request failed:', error);
        }
    })
  })
  loadTweets();
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


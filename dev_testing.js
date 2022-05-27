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

let test = function(data) {
  for(let i = 0; i < data.length; i++) {
    console.log(data.length);
    let obj = data[i]
    console.log(data[i]);
  }
  return
}

console.log('TEST:', test(data))

// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);

// console.log('data[0].user', data[0].user)
// console.log('data[0].content', data[0].content)
// console.log('data[0].created_at', data[0].created_at)
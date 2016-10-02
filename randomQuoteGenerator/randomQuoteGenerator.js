$(document).ready(function() {

  var quotes = ["In order to succeed, we must first believe that we can. - Nikos Kazantakis", 
  "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. - Confucious",
   "Things work out best for those who make the best of how things work out. - Jon Wooden",
    "Good things come to people who wait, but better things come to those who go out and get them. - Anonymous",
     "Great minds discuss ideas, average minds discuss events, small minds discuss people. - Eleanor Roosevelt",
      "If you can't explain it simply, you do not understand it well enough. - Albert Einstein",
       "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun", 
       "A dream doesn’t become reality through magic, it takes sweat, determination and hard work. - Colin Powell", 
       "All growth depends upon activity. There is no development physically or intellectually without effort, and effort means work. - Calvin Coolidge"]; //add in quotes
  
  

  $("#button").on("click", function() {
    var random = quotes[Math.floor(Math.random() * quotes.length)];
    $("#quote").text(random);
    $("#twitter > a").attr("href", "https://twitter.com/intent/tweet?text=" + random)
  });

  

});
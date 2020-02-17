document.addEventListener("DOMContentLoaded", function() {
  const quotes = document.querySelectorAll('.blogQuote');
  
  let tweetableUrl = "";
  let clickToTweetBtn = null;
  const currentPageUrl = window.location.href;

  quotes.forEach(function(quote){
    tweetableUrl = makeTweetableUrl(
      quote.innerText, currentPageUrl
    );
  
    clickToTweetBtn = document.createElement("a");
    clickToTweetBtn.classList.add("tweet-button");
    clickToTweetBtn.innerText = '  Tweet';
  
    clickToTweetBtn.setAttribute("href", tweetableUrl);
    clickToTweetBtn.onclick = onClickToTweet;
  
    quote.appendChild(clickToTweetBtn);
  });
});

function makeTweetableUrl(text, pageUrl) {
  const truncatedText = text.length < 230 ? text + " @AritAmana" : text.substring(0,230) + "... @AritAmana";
  const readyText = encodeURIComponent(truncatedText);
  const tweetableText = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + readyText;

  return tweetableText;
}

function onClickToTweet(e) {
  e.preventDefault();
  
  window.open(
  e.target.getAttribute("href"), '_blank');
}
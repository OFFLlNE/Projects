$(document).ready(function() {
    getQuote();
    $('#getMessage').on("click",getQuote);
});
 
function getQuote(){
    $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(json) {
            json = json.shift();
            myQuote = json.content;
            myAuthor = json.title;
            $('.textHere').html(myQuote + ' - ' + myAuthor);
    },
    cache: false
    });
}

$(".twitter-share-button").on("click", function() {
    window.open("http://twitter.com/home/?status=" + $("#quoteHere").text());
  });


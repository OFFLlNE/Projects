var api = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";


$(".button-search").click(function(){
  $(".wikiPages").empty();
  var inputVal = document.getElementById("text-here").value;
  $.ajax({
    url:(api + inputVal),
    success: function(response){
      var myPages = response.query.pages
      //console.log(myPages);
      for (page in myPages){
        //console.log(myPages[page].pageid);
        $(".wikiPages").append("<a href='https://en.wikipedia.org/?curid="+ myPages[page].pageid +"' target='_blank'><h3 class = 'myText'>" +  myPages[page].title + "</h3><p class= 'myText'>" + myPages[page].extract + "</p></a>")
        //console.log(myPages[page].title);
        //console.log(myPages[page].extract);
      }
      }
  });
});
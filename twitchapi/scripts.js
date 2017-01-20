console.log("Does not work very well sometimes because of API workaround --refresh");

var channels = ["imaqtpie", "freecodecamp", "nanonoko", "AnomalyXd","PokerStaples","LexVeldhuis","ElkY","flosd","MushIsGosu","comster404", "STPeach","fakeStreamName"];
var api = "https://wind-bow.gomix.me/twitch-api/";
var types = ["users/", "channels/", "streams/"]

for (let i = 0; i < channels.length; i++){
  $.ajax({
    url: (api +  types[1] + channels[i]),
    dataType: 'jsonp',
    success : function(data){
      var ourLogo = data.logo
      $.ajax({
        url: (api +  types[0] + channels[i]),
        dataType: 'jsonp',
        success : function(data){
          var accInfo = data.error
          if(accInfo === "Unprocessable Entity"){
            $(".streamInfo").append(`<a href="https://www.twitch.tv/${channels[i]}" target="_blank"><div class="eachStream row"><div class ="logo col-sm-2">No Logo</div><div class="streamer col-sm-3">${channels[i]}</div><div class="streamStatus col-sm-6"><p>Accound has been Banned/Closed</p></div></div></a>`)
          }
          else if(accInfo === "Not Found"){
            $(".streamInfo").append(`<a href="https://www.twitch.tv/${channels[i]}" target="_blank"><div class="eachStream row"><div class ="logo col-sm-2">No Logo</div><div class="streamer col-sm-3">${channels[i]}</div><div class="streamStatus col-sm-6"><p>This Account does not exist</p></div></div></a>`)
          }
          else{
            $.ajax({    
              url: (api +  types[2] + channels[i]),
              dataType: 'jsonp',
              success : function(newData){
                if(newData.stream === null){
                  $(".streamInfo").append(`<a href="https://www.twitch.tv/${channels[i]}" target="_blank"><div class="eachStream row"><div class ="logo col-sm-2"><img src="${ourLogo}"></div><div class="streamer col-sm-3">${channels[i]}</div><div class="streamStatus col-sm-6"><p>Stream is Offline</p></div></div></a>`)
                }
                else{
                  $(".streamInfo").append(`<a href="https://www.twitch.tv/${channels[i]}" target="_blank"><div class="eachStream row"><div class ="logo col-sm-2"><img src="${ourLogo}"></div><div class="streamer col-sm-3">${channels[i]}</div><div class="streamStatus col-sm-6"><p style="color:red">Live! Streaming: ${newData.stream.channel.game}</p></div></div></a>`)
                }
              }
            });
          }
        }
      });
    } 
  });    
}  
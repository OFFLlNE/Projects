const ranges = document.querySelectorAll('.player_slider');

function handleRangeUpdate() {
  $(`.${this.name}`).html(`${this.name} Length ${this.value}`)
  if(this.name === "Session"){
    $(".Countdown").html(`${this.value}:00`)
  }
}

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


var myTimer;
var seconds;


var a = new Audio("http://rcptones.com/dev_tones/tones/music_marimba_chord.wav");


//when seconds hit 0 it will launch Break timer
function launchBreak(){
  const minutes = document.getElementById("breakTime").value;
  seconds = minutes*60;
  document.getElementById("sessionActive").style.color = "white";
  document.getElementById("breakActive").style.color = "red";
  myTimer= setInterval(function(){
      seconds -= 1;
      if (seconds % 60 < 10){
        $(".Countdown").html(`${Math.floor(seconds/60)}:0${seconds%60}`)
      }else{
        $(".Countdown").html(`${Math.floor(seconds/60)}:${seconds%60}`)
      }
    if (seconds <= 0){
      clearInterval(myTimer);
      $("#startButton").trigger('click');
      a.play();
    }
    }, 1000);
}



document.getElementById("startButton").addEventListener("click", function(){
  //removing EventListeners so it would not affect the display
  ranges.forEach(range => range.removeEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.removeEventListener('mousemove', handleRangeUpdate));
  //when started
  if(this.value === "start"){
    this.value = "stop";
    $("#startButton").html("Stop");
    const minutes = document.getElementById("sessionTime").value;
    seconds = minutes*60;
    //changes headings to know which is currently counting down
    document.getElementById("breakActive").style.color = "white";
    document.getElementById("sessionActive").style.color = "red";
    myTimer= setInterval(function(){
      seconds -= 1;
      //to add 0 in front of values from 9-1
      if (seconds % 60 < 10){
        $(".Countdown").html(`${Math.floor(seconds/60)}:0${seconds%60}`)
      }else{
        $(".Countdown").html(`${Math.floor(seconds/60)}:${seconds%60}`)
      }
      //starts break
      if (seconds <= 0){
        clearInterval(myTimer);
        launchBreak();
      }
    }, 1000);
  }
  //when stop is pressed
  else if(this.value === "stop"){
    this.value = "reset";
    $("#startButton").html("Reset");
    clearInterval(myTimer);
    document.getElementById("sessionActive").style.color = "white";
    document.getElementById("breakActive").style.color = "white";
  //when reset is pressed  
  }else{
    this.value = "start";
    $("#startButton").html("Start");
    const minutes = document.getElementById("sessionTime").value;
    const breakMinutes = document.getElementById("breakTime").value;
    $(".Countdown").html(`${minutes}:00`)
    /*Change headings if some1 did change them while EventListeners
    were turned off */
    $(".Session").html(`Session Length ${minutes}`)
    $(".Break").html(`Break Length ${breakMinutes}`)
    //EventListeners back in action
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
  }
});
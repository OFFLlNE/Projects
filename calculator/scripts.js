$( document ).ready(function() {
  //An Easter egg
  const secretCode = "uni"
const pressed = [];
	window.addEventListener("keyup", (e) =>{
		pressed.push(e.key);
		pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
	if (pressed.join("").includes(secretCode)){
		cornify_add();	
	}	
	})
  //FOR TOGGLING THE OVERFLOW CSS!!
  var buttonValue = false;
  function myScript() {
    if (buttonValue == false){
      buttonValue = true;
      document.getElementById("screen").style.overflow = "scroll";  
    }
    else{
      buttonValue = false;
      document.getElementById("screen").style.overflow = "hidden";
    }
  }
  document.getElementById("toggleO").addEventListener("click", myScript);
  
  //Calculating
  var buttonArr = document.getElementsByTagName('button');
  var sumStr= "";
  for (var i = 1; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click', function(){
      if (this.value === "="){
        try {
          $(".valueScreen").html(math.eval(sumStr));
          console.log(math.eval(sumStr));
          sumStr=math.eval(sumStr);  
        }
        catch(err) {
          alert("Syntax error, try again!")
          sumStr=""
          $(".valueScreen").html(0);

        }
      }
      else if (this.value === "C"){
        $(".valueScreen").html("0");
        sumStr="";
      }
      else{
        $(".valueScreen").html(sumStr+=(this.value)); 
      }})
  }
});
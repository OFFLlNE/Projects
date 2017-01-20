function checkWin(arr){
  if((arr[0] == arr[1] && arr[1] == arr[2]) ||
     (arr[3] == arr[4] && arr[4] == arr[5]) ||
     (arr[6] == arr[7] && arr[7] == arr[8]) ||
     (arr[0] == arr[3] && arr[3] == arr[6]) ||
     (arr[1] == arr[4] && arr[4] == arr[7]) ||
     (arr[2] == arr[5] && arr[5] == arr[8]) ||
     (arr[0] == arr[4] && arr[4] == arr[8]) ||
     (arr[2] == arr[4] && arr[4] == arr[6])){
    return true;
  }
}

var aiScore = 0;
var myScore = 0;

function newGame(){
  buttons.forEach(button => button.addEventListener('click', handleCheck));
  document.getElementById("tickType").addEventListener("click",tickType);
  document.getElementById("tickType").click();
  document.getElementById("tickType").click();
  document.getElementById("tie").innerHTML = "";
  newArr = ["10","11","12","13","14","15","16","17","18"];
  buttons.forEach(function(e){
    e.innerHTML = "";                
  });
}

var tick;
var playerTurn = true;
function tickType(e){
  if(e.target.innerHTML == "X"){
    e.target.innerHTML = "O";
    tick = false;
  }else{
    e.target.innerHTML = "X";
    tick = true;
  }
  playerTurn = tick;
}

function isBoardNotFull(arr){
  var checker = 0;
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      checker+=1;
    } 
  }
  return checker > 0;
}

const buttons = document.querySelectorAll("button")
var newArr = ["10","11","12","13","14","15","16","17","18"];

function handleCheck(e){
  document.getElementById("tickType").removeEventListener("click",tickType);
  if(e.target.innerHTML == ""){
    if(playerTurn){
      e.target.innerHTML = "X";
      newArr[e.target.value] = 1;
      if (checkWin(newArr)){
        buttons.forEach(button => button.removeEventListener('click', handleCheck));
        myScore += 1;
        document.getElementById("playerScreen").innerHTML = myScore;
        console.log("Player1 wins");
      }else{
        if(isBoardNotFull(newArr)){
        var randomInt = Math.floor(Math.random() * 8);
          while(typeof newArr[randomInt] === 'number'){
            randomInt = Math.floor(Math.random() * 8);
          }
        newArr[randomInt] = 3;
        buttons[randomInt].innerHTML="O";
        console.log(buttons[randomInt]); 
        if (checkWin(newArr)){
          buttons.forEach(button => button.removeEventListener('click', handleCheck));
          aiScore += 1;
          document.getElementById("aiScreen").innerHTML = aiScore;
          console.log("Computer won");
        }  
        }else{
          document.getElementById("tie").innerHTML = "It's a TIE!";
        }
      }
        
        
    }else{
      e.target.innerHTML = "O";
      newArr[e.target.value] = 0;
      if (checkWin(newArr)){
        buttons.forEach(button => button.removeEventListener('click', handleCheck));
        myScore += 1;
        document.getElementById("playerScreen").innerHTML = myScore;
        console.log("Player1 wins");
      }else{
        if(isBoardNotFull(newArr)){
        var randomInt = Math.floor(Math.random() * 8);
          while(typeof newArr[randomInt] === 'number'){
            randomInt = Math.floor(Math.random() * 8);
          }
        newArr[randomInt] = 3;
        buttons[randomInt].innerHTML="X";
        console.log(buttons[randomInt]); 
        if (checkWin(newArr)){
          buttons.forEach(button => button.removeEventListener('click', handleCheck));
          aiScore += 1
          document.getElementById("aiScreen").innerHTML = aiScore;
          console.log("Computer won");
        }  
        }else{
          document.getElementById("tie").innerHTML = "It's a TIE!";
        }
      }
    }
  }    
}

document.getElementById("tickType").addEventListener("click",tickType);
document.getElementById("newGame").addEventListener("click",newGame);
buttons.forEach(button => button.addEventListener('click', handleCheck));
  
      
  
  
  
  
  
  
  
  
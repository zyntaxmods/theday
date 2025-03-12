var count = 0;
var exitCount = 0;

function showBox(){
  const alertBox = document.getElementById("alertBox");
  const button = document.getElementById("jee");
  alertBox.style.display = "flex"
  alertBox.style.animation = "show 1s forwards";
  button.disabled = true;
  setTimeout(() => {
    alertBox.style.animation = "hide 1s forwards";
    button.disabled = false;
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 500)
  }, 3000)
}

var image = document.getElementById("image");
let kenshie = document.getElementById("kenshie").onclick = function(){
  let word = document.getElementById("kenshie");
  count++;
  if(count == 1){
    image.src = "images/shy.gif";
    word.textContent = "oh no";
    
  }
  else if(count == 2){
    image.src = "images/accepted.gif";
    word.textContent = "uhh";
  }
  else if(count == 3){
    alert("huh??");
  }
  else if(count == 4){
    alert("system crash")
    word.textContent = "continue";
  }
  else if(count == 5){
    window.location.href = "main.html";
  }
}
let jee = document.getElementById("jee").onclick = function(){
  exitCount++;
  let exitWord = document.getElementById("jee");
  let kenshiejee = document.getElementById("kenshiejee");
  if(exitCount == 1){
    image.src = "images/rejected.gif";
    exitWord.textContent = "uhh...";
    kenshiejee.textContent = "nooo! not allowed"
    showBox();
  }
  else if(exitCount == 2){
    exitWord.textContent = "wait what?";
    kenshiejee.textContent = "access denied!"
    showBox();
  }
  else if(exitCount == 3){
    kenshiejee.textContent = "rejected. try again never";
    exitWord.textContent = "ouch";
    showBox();
  }
  else if(exitCount == 4){
    kenshiejee.textContent = "error 404: chance not found";
    exitWord.textContent = "bruh";
    showBox();
  }
  else if(exitCount == 5){
    kenshiejee.textContent = "application denied";
    exitWord.textContent = "crying";
    showBox();
  }
  else if(exitCount == 6){
    window.location.href = "https://vt.tiktok.com/ZSMsQ31Tn/";
  }
}
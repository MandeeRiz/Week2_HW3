
//HELLO!!! THIS WAS MY PRACTICE script


//if you are looking for the script that works head over to script2
 

/*
const startTimer= () => {

  let counterM = 0
  
  const timerIdM = setInterval(() =>{
    ++ counterM ; 
    if(counterM === 20) clearInterval(timerIdM);
    mins.value = counterM;
  },60000)

    let counterS = 0
    
    const timerIdS = setInterval(() =>{
      ++ counterS ; 
      if(counterS === 59) clearInterval(timerIdS);
      secs.value = counterS;
    },1000)

    if(counterS === 59){
      counterS = 0
    }

}
  




/*const startTimer = () => {
  for(let i=0;i<60 ;i++){
      let currentMins = mins.value = i
      setInterval(startTimer, 1000);
  }
  }
*/

/*
const buttEl = document.querySelector(".button")
buttEl.addEventListener("click", startTimer)


let mins = document.querySelector(".minInput");
 mins.value = "00";
 
 let secs = document.querySelector(".secInput");
 secs.value = "00";

 console.log("hi")


*/





/*let startTime;
let limit;
let timer;


  document.getElementById("button").addEventListener("click", clickBut);

function clickBut() {

  startTime = 00;

  limit = parseInt(document.getElementById("input").value);

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  var currentTime = new Date();

  let elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  let minutes = Math.floor(elapsed / 60);
  let seconds = Math.floor(elapsed % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("clock").innerHTML = minutes + ":" + seconds;

  if (minutes >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}*/

//document.addEventListener("keyup",function(event){
 // if (event.code === "Enter"){
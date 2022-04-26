var m=0;
var s=0;
function to_start(){

switch(document.getElementById('btn').value)
{
case  'Stop':
window.clearInterval(tm); // stop the timer 
document.getElementById('btn').value='Start';
break;
case  'Start':
tm=window.setInterval('disp()',1000);
document.getElementById('btn').value='Stop';
break;
}
}

function disp(){
// Format the output by adding 0 if it is single digit //
if(s<10){var s1='0' + s;}
else{var s1=s;}
if(m<10){var m1='0' + m;}
else{var m1=m;}
// Display the output //

let mins = document.querySelector(".minInput");
let secs = document.querySelector(".secInput");

secs.value = s
mins.value = m
// Calculate the stop watch // 
if(s<59){ 
s=s+1;
}else{
s=0;
m=m+1;
if(m==60){
m=0;
} // end if  m ==60
}// end if else s < 59
// end of calculation for next display
}

document.querySelector(".minInput").addEventListener("keypress", function(event){
    if(event.code === "Enter"){
        document.getElementById("myText").focus();
    }
})

// press enter for timer to start
document.addEventListener("keypress", to_start());

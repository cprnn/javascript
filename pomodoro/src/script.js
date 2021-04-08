let seconds = 0;
let intervalo;
let minutes;
let min;
let sec;

function pomodoro(minutes) {
    seconds = minutes*60 || 0;

    intervalo = setInterval(function(){

        seconds--;
     
        if(!seconds){
            clearInterval(intervalo);
            alert("Your pomodoro timer is over, go get some rest!")
        }
        
    }, 1000);
        
}
console.log();
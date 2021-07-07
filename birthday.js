let text;
let person = prompt("Enter name:", "");
let m = prompt("Enter your Month:", "Jan/Feb/Mar/Apr...");
let d = prompt("Enter your Date:", "1/2/3/4/5...");
let y = prompt("Enter your Year:", "2021,2022...");
   
text = m+" "+d+", "+y+" 00:00:00";

var countDownDate = new Date(text).getTime();

var x = function() {
  // today's date
  var now = new Date().getTime();

  var difference = countDownDate - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours ;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  document.getElementById("person").innerHTML = person;

  // Message
  if (difference < 0) {
    clearTimeout(timer);
    var song=new Audio("song.mp3");
    song.play();
    document.getElementById("head").innerHTML="Happy Birthday "+person+"!!";
    document.getElementById("day").innerHTML = 0;
  document.getElementById("hour").innerHTML = 0 ;
  document.getElementById("min").innerHTML = 0;
  document.getElementById("sec").innerHTML = 0;
  }

}

var timer=setInterval(x, 1000);

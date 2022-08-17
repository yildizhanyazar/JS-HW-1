let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];
let names = prompt("Please write your name");
let var1 = document.querySelector("#myName");
if (names) {
   var1.innerHTML = `${names}`;
} else {
   alert("Lütfen İsim giriniz");
   location.reload();
}

function mytime() {
   let time = new Date();
   let day = days[time.getDay()];
   let hourss = time.getHours();
   let min = time.getMinutes();
   let milsec = time.getSeconds();
   document.querySelector(
      "#myClock"
   ).innerHTML = `${hourss}| ${min}| ${milsec}    ${day}`;
}

setInterval(mytime, 1000);

function updateClock(){
    const hourEl = document.getElementsByClassName("hour");
const minuteEl = document.getElementsByClassName("minute");
const secondEl = document.getElementsByClassName("second");
const ampmEl = document.getElementsByClassName("ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am ="AM";
if(h > 12){
    h = h -12;
    am = "PM";
}

hourEl[0].innerHTML = h;
minuteEl[0].innerHTML = m;
secondEl[0].innerHTML = s;
ampmEl[0].innerHTML = am;

setTimeout(() => { updateClock(),1000});

}
updateClock();



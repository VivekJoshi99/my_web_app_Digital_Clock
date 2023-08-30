const hourElement = document.getElementById("Hour");
const minuteElement = document.getElementById("Minute");
const secondElement = document.getElementById("Second");
const ampmElement = document.getElementById("ampm");

function callTime()
{
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    if(hour>12)
    {
        hour = hour - 12;
        ampm = "PM"
    }

    hour = hour<10 ? "0"+ hour : hour;
    min = min<10 ? "0"+ min : min;
    sec = sec<10 ? "0"+ sec : sec;
    
    hourElement.innerText = hour;
    minuteElement.innerText = min;
    secondElement.innerText = sec;
    ampmElement.innerText = ampm;
    setTimeout(()=>{
        callTime();
    },1000)
}
callTime();

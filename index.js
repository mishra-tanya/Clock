setInterval(()=>{
    d=new Date();
    hourtime =d.getHours();
    mintime=d.getMinutes();
    sectime=d.getSeconds();

    hourrotation=30*hourtime + mintime/2;
    minrotation=6*mintime + sectime/10;
    secrotation=6*sectime;

    hour.style.transform = `rotate(${hourrotation}deg)`;
    minute.style.transform = `rotate(${minrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
} ,1000)

console.log("ih");
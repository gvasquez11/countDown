const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

function countDown(){
    const currentTime = new Date();
    const hall = new Date("31 October 2020");
    let diff = Math.abs(currentTime - hall) / 1000;

    const d = Math.floor(diff/86400);
    const h = Math.floor(diff/ 3600) % 24;
    const m = Math.floor(diff/ 60) % 60;
    const s =  Math.floor(diff % 60);

    days.innerHTML = d;
    hours.innerHTML = sd(h);
    min.innerHTML = sd(m);
    sec.innerHTML = sd(s);
    
}

function sd(x){
    if(x < 10)
    return '0' + x;
    else 
    return x
}
countDown();
setInterval(countDown, 1000)
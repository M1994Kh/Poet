// let i = -1
function blink()    {
    let i = Math.floor(Math.random() * 14)
    // i++
    // if (i>24) { 
    //     i-=25
    // }
    console.log(i)
    // document.getElementsByTagName('td')[Math.floor(Math.random() * 25)].style.background="black" 
    document.getElementsByTagName('td')[i].style.animation="animateBlink 12s linear infinite" 
    // document.getElementsByTagName('td')[i].style.background="#2c4766;" 
}
setInterval(blink, 5000);




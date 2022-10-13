const cursorElm = document.getElementById('cursor');
addEventListener('mousemove', (eventData)=> {
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    
    // console.log(cursorElm);
    // console.log(eventData.pageX);
});
document.body.addEventListener('mouseleave',() =>{
    cursorElm.style.opacity = 0;


});
document.body.addEventListener('mouseenter',() =>{
    cursorElm.style.opacity = 1;
});

// const tmrId1 = setInterval(()=> {
//     console.log('print this...')
// }, 500);

const btnStopTimer1 = document.querySelector("#btnStopTimer1");
btnStopTimer1.addEventListener('click', ()=> clearInterval(tmrId1));

document.body.addEventListener('mouseup')

const mouseHold = setInterval(()=> {
    console.log('print this...')
}, 500);


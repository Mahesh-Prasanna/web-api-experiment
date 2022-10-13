// console.log('ih', window.innerHeight);
// console.log('oh', window.outerHeight);

// console.log('iw', window.innerWidth);
// console.log('ow', window.outerWidth);

// const boxElm = document.querySelector('#box');
// boxElm.style.top = `${innerHeight - 80}px`;

const boxElm = document.querySelector('#box');

let x = 0;
const startY = (innerHeight-boxElm.offsetHeight) / 2;

setInterval(() =>{
    const y = startY + Math.sin(x++ / 180) * (startY);
    boxElm.style.top = `${y}px`;
}, 5);
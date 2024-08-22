const mainContainer = document.querySelector('.container');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');


const crosses = document.querySelectorAll('.ri-close-line');

btn1.addEventListener('click', () => {
    container1.style.display = 'block';
    mainContainer.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';

});

btn2.addEventListener('click', () => {
    container2.style.display = 'block';
    mainContainer.style.display = 'none';
    container1.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
});

btn3.addEventListener('click', () => {
    container3.style.display = 'block';
    mainContainer.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container4.style.display = 'none';
});

btn4.addEventListener('click', () => {
    container4.style.display = 'block';
    mainContainer.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
});

crosses.forEach((cross) => {
    cross.addEventListener('click', () => {
        mainContainer.style.display = 'flex';
        container1.style.display = 'none';
        container2.style.display = 'none';
        container3.style.display = 'none';
        container4.style.display = 'none';
    });
});


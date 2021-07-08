const counter = document.getElementById('counter');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');
const reset = document.querySelector('.reset');
const random = document.querySelector('.random');
const min = 1;
const max = 500;

let count = 0; //Contador inicia en 0
incr.addEventListener("click", () => {
    count ++;
    counter.innerHTML = count;
    if (count == 20) {
        count = 0;
        counter.innerHTML = count;
    }
});
decr.addEventListener("click", () => {
    count --;
    counter.innerHTML = count;
});
reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});
random.addEventListener("click", () => {
    count = Math.floor((Math.random() * (max - min + 1)) + min); //Floor para hacer numeros enteros y random para numeros aleatorios
    counter.innerHTML = count;
    console.log(count)
})
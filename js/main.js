const counter = document.getElementById('counter');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');

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
})
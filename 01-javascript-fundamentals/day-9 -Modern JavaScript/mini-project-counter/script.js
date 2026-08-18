let count = 0;

const counter = document.getElementById("counter");

const increaseBtn = document.getElementById("increaseBtn");

const decreaseBtn = document.getElementById("decreaseBtn");

const resetBtn = document.getElementById("resetBtn");


increaseBtn.addEventListener("click", () => {

    count++;

    counter.innerText = count;

});


decreaseBtn.addEventListener("click", () => {

    if (count === 0) {
        alert("Please increase the value first.");
        return;
    }

    count--;

    counter.innerText = count;
});


resetBtn.addEventListener("click", () => {

    if (count === 0) {
        alert("There is no value to reset.");
        return;
    }

    alert("All values reset.");

    count = 0;

    counter.innerText = count;
});
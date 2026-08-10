const clock = document.getElementById("clock");
const formatBtn = document.getElementById("formatBtn");

let is24Hour = false;


function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");


    if (is24Hour) {

        hours = String(hours).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;

        formatBtn.innerText = "12 Hour";

    } else {

        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }

        hours = String(hours).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

        formatBtn.innerText = "24 Hour";
    }
}

// clicke event


formatBtn.addEventListener("click", () => {

    is24Hour = !is24Hour;

    updateClock();

});

// updaqte

updateClock();

setInterval(updateClock, 1000);
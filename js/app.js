
const dropdownMenu = document.getElementById("dropdown");
const display = document.getElementById("result");
const date = document.getElementById("date");

displayDate();

// Event Listener

dropdownMenu.addEventListener("change", displayDate);

function displayDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();

    let displayString;

    if (dropdownMenu.value === "1") {
        displayString = day + " - " + month + " - " + year;
    }
    else if (dropdownMenu.value === "2") {
        displayString = year + " - " + month + " - " + day;
    }
    else {
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        displayString = month + " - " + day + " - " + year
            + ` ${hours} Hours ${minutes} Minutes`;
    }
    display.innerText = displayString;
    date.innerText = currentDate.toDateString();
}
let [clock, color] = [document.querySelector('.clock'), document.querySelector('.color')];

function hex() {
    let date = new Date(),
        hours = date.getHours().toString(),
        minutes = date.getMinutes().toString(),
        seconds = date.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let clockString = `${hours}:${minutes}:${seconds}`;
    let colorString = `#${hours}${minutes}${seconds}`

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.backgroundColor = colorString;


}
hex();
setInterval(hex, 1000);

let [clock, color] = [document.querySelector('.clock'), document.querySelector('.color')];

// convert decimal number to hexidecimal value
function intToHex(integer) {
    let number = (+integer).toString(16).toUpperCase();
    number = (number.length % 2) > 0 ? "0" + number : number;
    return number;
}

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

    // deleted colons and commas from the string and get something like this: from "12:34:56" to "123456"
    colorString = clockString.match(/\d/g).join().replace(/,/g, '');

    colorString = '#' + intToHex(colorString);

    // let colorString = `#${hours}${minutes}${seconds}`;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.backgroundColor = colorString;


}
hex();
setInterval(hex, 1000);

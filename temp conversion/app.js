const textBox = document.getElementById('textBox');
const toFah = document.getElementById('toFah');
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (toFah.checked) {
        temp = parseInt(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if (toCelsius.checked) {
        temp = parseInt(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else {
        result.textContent = "Select a Unit"
    }
}
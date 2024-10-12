const calTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('select');
    const valueTemp = select.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176;F";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176;C";
    }
}
const container = document.querySelector("#container").innerHTML = valueTemp;
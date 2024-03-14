function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var selectedUnit = document.getElementById("unit").value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var convertedTemperature;
    switch (selectedUnit) {
        case "celsius":
            convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
            break;
        case "fahrenheit":
            convertedTemperature = parseFloat(temperatureInput) * (9 / 5) + 32;
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit.toUpperCase()}`;
}

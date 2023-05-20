var input = document.getElementById("input");
var output = document.getElementById("output");
var changeUnit1 = document.getElementById("fromUnit");
var changeUnit2 = document.getElementById("toUnit");
var outputLength = document.getElementById("output");

changeUnit2.addEventListener('click', function (key) {
    outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
})

changeUnit1.addEventListener('click', function (key) {
    outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
})

input.addEventListener('input', function (key) {
    outputLength.value = ConvertLength(key.target.value, changeUnit1.value, changeUnit2.value);
})

function ConvertLength(value, fromUnit, toUnit) {
    value = Number(value);
    switch (fromUnit) {
        case "celsius":
            break;
        case "fahrenheit":
            value = (value - 32) * 5 / 9;
            break;
        case "kelvin":
            value = value - 273.15;
            break;
    }
    switch (toUnit) {
        case "celsius":
            return value;
        case "fahrenheit":
            return (value * 9 / 5) + 32;
        case "kelvin":
            return value + 273.15;
    }
}
var input = document.getElementById("input");
var output = document.getElementById("output");
var changeUnit1 = document.getElementById("fromUnit");
var changeUnit2 = document.getElementById("toUnit");
var outputLength = document.getElementById("output");

changeUnit2.addEventListener('click',function(key){
    if (validate(input.value)) {
        outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
    }
})

changeUnit1.addEventListener('click',function(key){
    if (validate(input.value)) {
        outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
    }
})

input.addEventListener('input', function (key) {
    if (validate(key.target.value)) {
        outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
    }
})

function validate(a) {
    if (a < 0) {
        return false;
    }
    return true;
}

function ConvertLength(value, fromUnit, toUnit) {
    value = Number(value);
    var multiplier = 0;
    switch (fromUnit) {
        case "milligram":
            multiplier = 1;
            break;
        case "gram":
            multiplier = 1000;
            break;
        case "kilogram":
            multiplier = 1000000;
            break;
        case "metricton":
            multiplier = 1000000000;
            break;
        case "pound":
            multiplier = 453592;
            break;
        case "ounce":
            multiplier = 28349.5;
            break;
    }
    value = value * multiplier;
    switch (toUnit) {
        case "milligram":
            return value / 1;
        case "gram":
            return value / 1000;
        case "kilogram":
            return value / 1000000;
        case "metricton":
            return value / 1000000000;
        case "pound":
            return value / 453592;
        case "ounce":
            return value / 28349.5;
    }
}
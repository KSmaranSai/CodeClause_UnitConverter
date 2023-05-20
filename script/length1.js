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
        case "millimeter":
            multiplier = 1;
            break;
        case "centimeter":
            multiplier = 10;
            break;
        case "decimeter":
            multiplier = 100;
            break;
        case "meter":
            multiplier = 1000;
            break;
        case "kilometer":
            multiplier = 1000000;
            break;
        case "foot":
            multiplier = 304.8;
            break;
        case "inch":
            multiplier = 25.4;
            break;
        case "mile":
            multiplier = 1609344;
            break;
        case "yard":
            multiplier = 914.4;
            break;
    }
    value = value * multiplier;
    switch (toUnit) {
        case "millimeter":
            return value;
        case "centimeter":
            return value / 10;
        case "decimeter":
            return value / 100;
        case "meter":
            return value / 1000;
        case "kilometer":
            return value / 1000000;
        case "foot":
            return value / 304.8;
        case "inch":
            return value / 25.4;
        case "mile":
            return value / 1609344;
        case "yard":
            return value / 914.4;
    }
}
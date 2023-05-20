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
        case "cubicmillimeter":
            multiplier = 1;
            break;
        case "cubiccentimeter":
            multiplier = 1000;
            break;
        case "cubicmeter":
            multiplier = 1000000000;
            break;
        case "cubickilometer":
            multiplier = 1000000000000000000;
            break;
        case "liter":
            multiplier = 1000000;
            break;
        case "milliliter":
            multiplier = 1000;
            break;
        case "usgallon":
            multiplier = 3785410;
            break;
        case "usfluidounce":
            multiplier = 29573.515625;
            break;
    }
    value = value * multiplier;
    switch (toUnit) {
        case "cubicmillimeter":
            return value / 1;
        case "cubiccentimeter":
            return value / 1000;
        case "cubicmeter":
            return value / 1000000000;
        case "cubickilometer":
            return value / 1000000000000000000;
        case "liter":
            return value / 1000000;
        case "milliliter":
            return value / 1000;
        case "usgallon":
            return value / 3785410;
        case "usfluidounce":
            return value / 29573.515625;
    }
}
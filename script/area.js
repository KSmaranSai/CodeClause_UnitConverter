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
    if (validate(input.value)) {
        outputLength.value = ConvertLength(input.value, changeUnit1.value, changeUnit2.value);
    }
})

function validate(a) {
    if (a <= 0) {
        return false;
    }
    return true;
}

function ConvertLength(value, fromUnit, toUnit) {
    value = Number(value);
    var multiplier = 0;
    switch (fromUnit) {
        case "squarecentimeter":
            multiplier = 1;
            break;
        case "squaremeter":
            multiplier = 10000;
            break;
        case "squarekilometer":
            multiplier = 10000000000;
            break;
        case "hectare":
            multiplier = 100000000;
            break;
        case "squaremile":
            multiplier = 25899900000;
            break;
        case "squareyard":
            multiplier = 8361.2736;
            break;
        case "squareinch":
            multiplier = 6.4516;
            break;
        case "squarefoot":
            multiplier = 929.0304;
            break;
        case "acre":
            multiplier = 40468564.224;
            break;
    }
    value = value * multiplier;
    switch (toUnit) {
        case "squarecentimeter":
            return value / 1;
        case "squaremeter":
            return value / 10000;
        case "squarekilometer":
            return value / 10000000000;
        case "hectare":
            return value / 100000000;
        case "squaremile":
            return value / 25899900000;
        case "squareyard":
            return value / 8361.2736;
        case "squareinch":
            return value / 6.4516;
        case "squarefoot":
            return value / 929.0304;
        case "acre":
            return value / 40468564.224;
    }
}
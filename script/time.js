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
        case "microsecond":
            multiplier = 1;
            break;
        case "millisecond":
            multiplier = 1000;
            break;
        case "second":
            multiplier = 1000000;
            break;
        case "nanosecond":
            multiplier = 0.001;
            break;
        case "picosecond":
            multiplier = 0.000001;
            break;
        case "minute":
            multiplier = 60000000;
            break;
        case "hour":
            multiplier = 3600000000;
            break;
    }
    value = value * multiplier;
    switch (toUnit) {
        case "microsecond":
            return value / 1;
        case "millisecond":
            return value / 1000;
        case "second":
            return value / 1000000;
        case "nanosecond":
            return value / 0.001;
        case "picosecond":
            return value / 0.000001;
        case "minute":
            return value / 60000000;
        case "hour":
            return value / 3600000000;
    }
}
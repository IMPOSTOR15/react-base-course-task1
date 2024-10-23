function parseNumber(numberValue) {
    var base;
    switch (numberValue.base) {
        case 'decimal':
            base = 10;
            break;
        case 'binary':
            base = 2;
            break;
        case 'hexadecimal':
            base = 16;
            break;
        default:
            throw new Error('Неподдерживаемая разрядность');
    }
    return parseInt(numberValue.value, base);
}
function formatNumber(value, base) {
    switch (base) {
        case 'decimal':
            return value.toString(10);
        case 'binary':
            return value.toString(2);
        case 'hexadecimal':
            return value.toString(16).toUpperCase();
        default:
            throw new Error('Неподдерживаемая разрядность');
    }
}
function add(a, b, resultBase) {
    var numA = parseNumber(a);
    var numB = parseNumber(b);
    var result = numA + numB;
    var base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}
function subtract(a, b, resultBase) {
    var numA = parseNumber(a);
    var numB = parseNumber(b);
    var result = numA - numB;
    var base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}
function multiply(a, b, resultBase) {
    var numA = parseNumber(a);
    var numB = parseNumber(b);
    var result = numA * numB;
    var base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}
function divide(a, b, resultBase) {
    var numA = parseNumber(a);
    var numB = parseNumber(b);
    if (numB === 0) {
        throw new Error('Деление на ноль');
    }
    var result = Math.floor(numA / numB);
    var base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}
var decimalNum1 = { value: '42', base: 'decimal' };
var decimalNum2 = { value: '10', base: 'decimal' };
// Binary numbers
var binaryNum1 = { value: '101010', base: 'binary' };
var binaryNum2 = { value: '1010', base: 'binary' };
var hexNum1 = { value: '2A', base: 'hexadecimal' };
var hexNum2 = { value: 'A', base: 'hexadecimal' };
console.log('Addition:');
var result = add(decimalNum1, decimalNum2);
console.log("".concat(decimalNum1.value, " + ").concat(decimalNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = add(binaryNum1, binaryNum2);
console.log("".concat(binaryNum1.value, " + ").concat(binaryNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = add(hexNum1, hexNum2);
console.log("".concat(hexNum1.value, " + ").concat(hexNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
console.log('\nSubtraction:');
result = subtract(decimalNum1, decimalNum2);
console.log("".concat(decimalNum1.value, " - ").concat(decimalNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = subtract(binaryNum1, binaryNum2);
console.log("".concat(binaryNum1.value, " - ").concat(binaryNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = subtract(hexNum1, hexNum2);
console.log("".concat(hexNum1.value, " - ").concat(hexNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
console.log('\nMultiplication:');
result = multiply(decimalNum1, decimalNum2);
console.log("".concat(decimalNum1.value, " * ").concat(decimalNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = multiply(binaryNum1, binaryNum2);
console.log("".concat(binaryNum1.value, " * ").concat(binaryNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = multiply(hexNum1, hexNum2);
console.log("".concat(hexNum1.value, " * ").concat(hexNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
console.log('\nDivision:');
result = divide(decimalNum1, decimalNum2);
console.log("".concat(decimalNum1.value, " / ").concat(decimalNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = divide(binaryNum1, binaryNum2);
console.log("".concat(binaryNum1.value, " / ").concat(binaryNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
result = divide(hexNum1, hexNum2);
console.log("".concat(hexNum1.value, " / ").concat(hexNum2.value, " = ").concat(result.value, " (").concat(result.base, ")"));
console.log('\nCross-base Addition:');
result = add(decimalNum1, binaryNum2, 'decimal');
console.log("".concat(decimalNum1.value, " (decimal) + ").concat(binaryNum2.value, " (binary) = ").concat(result.value, " (").concat(result.base, ")"));
result = add(binaryNum1, hexNum2, 'binary');
console.log("".concat(binaryNum1.value, " (binary) + ").concat(hexNum2.value, " (hexadecimal) = ").concat(result.value, " (").concat(result.base, ")"));
result = add(hexNum1, decimalNum2, 'hexadecimal');
console.log("".concat(hexNum1.value, " (hexadecimal) + ").concat(decimalNum2.value, " (decimal) = ").concat(result.value, " (").concat(result.base, ")"));

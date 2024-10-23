type NumberBase = 'decimal' | 'binary' | 'hexadecimal';

interface NumberValue {
    value: string;
    base: NumberBase;
}

function parseNumber(numberValue: NumberValue): number {
    let base: number;
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

function formatNumber(value: number, base: NumberBase): string {
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

function add(a: NumberValue, b: NumberValue, resultBase?: NumberBase): NumberValue {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    const result = numA + numB;
    const base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}

function subtract(a: NumberValue, b: NumberValue, resultBase?: NumberBase): NumberValue {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    const result = numA - numB;
    const base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}

function multiply(a: NumberValue, b: NumberValue, resultBase?: NumberBase): NumberValue {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    const result = numA * numB;
    const base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}

function divide(a: NumberValue, b: NumberValue, resultBase?: NumberBase): NumberValue {
    const numA = parseNumber(a);
    const numB = parseNumber(b);
    if (numB === 0) {
        throw new Error('Деление на ноль');
    }
    const result = Math.floor(numA / numB);
    const base = resultBase || a.base;
    return {
        value: formatNumber(result, base),
        base: base,
    };
}

const decimalNum1: NumberValue = { value: '42', base: 'decimal' };
const decimalNum2: NumberValue = { value: '10', base: 'decimal' };

// Binary numbers
const binaryNum1: NumberValue = { value: '101010', base: 'binary' };
const binaryNum2: NumberValue = { value: '1010', base: 'binary' };

const hexNum1: NumberValue = { value: '2A', base: 'hexadecimal' };
const hexNum2: NumberValue = { value: 'A', base: 'hexadecimal' };

console.log('Addition:');

let result = add(decimalNum1, decimalNum2);
console.log(`${decimalNum1.value} + ${decimalNum2.value} = ${result.value} (${result.base})`);

result = add(binaryNum1, binaryNum2);
console.log(`${binaryNum1.value} + ${binaryNum2.value} = ${result.value} (${result.base})`);

result = add(hexNum1, hexNum2);
console.log(`${hexNum1.value} + ${hexNum2.value} = ${result.value} (${result.base})`);

console.log('\nSubtraction:');

result = subtract(decimalNum1, decimalNum2);
console.log(`${decimalNum1.value} - ${decimalNum2.value} = ${result.value} (${result.base})`);

result = subtract(binaryNum1, binaryNum2);
console.log(`${binaryNum1.value} - ${binaryNum2.value} = ${result.value} (${result.base})`);

result = subtract(hexNum1, hexNum2);
console.log(`${hexNum1.value} - ${hexNum2.value} = ${result.value} (${result.base})`);

console.log('\nMultiplication:');

result = multiply(decimalNum1, decimalNum2);
console.log(`${decimalNum1.value} * ${decimalNum2.value} = ${result.value} (${result.base})`);

result = multiply(binaryNum1, binaryNum2);
console.log(`${binaryNum1.value} * ${binaryNum2.value} = ${result.value} (${result.base})`);

result = multiply(hexNum1, hexNum2);
console.log(`${hexNum1.value} * ${hexNum2.value} = ${result.value} (${result.base})`);

console.log('\nDivision:');

result = divide(decimalNum1, decimalNum2);
console.log(`${decimalNum1.value} / ${decimalNum2.value} = ${result.value} (${result.base})`);

result = divide(binaryNum1, binaryNum2);
console.log(`${binaryNum1.value} / ${binaryNum2.value} = ${result.value} (${result.base})`);

result = divide(hexNum1, hexNum2);
console.log(`${hexNum1.value} / ${hexNum2.value} = ${result.value} (${result.base})`);



console.log('\nCross-base Addition:');

result = add(decimalNum1, binaryNum2, 'decimal');
console.log(`${decimalNum1.value} (decimal) + ${binaryNum2.value} (binary) = ${result.value} (${result.base})`);

result = add(binaryNum1, hexNum2, 'binary');
console.log(`${binaryNum1.value} (binary) + ${hexNum2.value} (hexadecimal) = ${result.value} (${result.base})`);

result = add(hexNum1, decimalNum2, 'hexadecimal');
console.log(`${hexNum1.value} (hexadecimal) + ${decimalNum2.value} (decimal) = ${result.value} (${result.base})`);

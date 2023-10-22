/*------------------------------------------------1----------------------------------------------*/
console.log('*-------------------------------------------1--------------------------------------*');

const differentTypeArray = [10, 'Apple', 21, 5, '23', 34, 123];

function getSumArrayNumbers (arrayForFunction) {
    const arrayWithNumbers = arrayForFunction.filter ((element) => isFinite(element)).map((element) => { return +element });
    const sumOfNumbersArray = arrayWithNumbers.reduce((prevValue, currValue) => { return prevValue + currValue }, 0);
    return sumOfNumbersArray / arrayWithNumbers.length;
}

console.log('Середнє арифметичне числових елементів масиву:', getSumArrayNumbers(differentTypeArray));

/*------------------------------------------------2----------------------------------------------*/
console.log('*-------------------------------------------2--------------------------------------*');

const firstNumber = +prompt ('Введіть перше число:');
const secondNumber = +prompt ('Введіть друге число:');
const operationWithNumbers = prompt ('Введіть знак операції обчислення:');

function doMath (firstNumber, secondNumber, operation) {
    switch (firstNumber, secondNumber)
        case 
}

doMath(firstNumber, secondNumber, operationWithNumbers);

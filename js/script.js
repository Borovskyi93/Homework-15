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


function doMath (firstNumber, secondNumber, operationWithNumbers) {
    
    if (firstNumber && secondNumber) {
        switch(operationWithNumbers) {
            case '+':
                console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
                break;
            case '-':
                console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
                break;
            case '*':
                console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
                break;
            case '/':
                console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
                break;
            case '%':
                console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
                break;
            case '^':
                console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
                break;
            default:
                console.log('Невірні дані!');
        }
    } else {
        console.log('Невірні дані!');
    }
}

doMath(firstNumber, secondNumber, operationWithNumbers);

/*------------------------------------------------3----------------------------------------------*/
console.log('*-------------------------------------------3--------------------------------------*');

const basicArrayLength = +prompt('Введіть довжину основного масиву:');
const insideElementsArrayLength = +prompt('Введіть довжину внутрішнього масиву:');

function toFillArrayElements (baseArrLength, insideArrLength) {
    const baseArray = [];

    for (let countBasicArr = 0; countBasicArr < baseArrLength; countBasicArr++) {
        baseArray[countBasicArr] = [];
        for (let insideCountArr = 0; insideCountArr < insideArrLength; insideCountArr++) {
            let elementsFromUser = +prompt('Елементи масиву:');
            baseArray[countBasicArr][insideCountArr] = elementsFromUser;
        }
    }
    return baseArray;
}

console.log(toFillArrayElements(basicArrayLength, insideElementsArrayLength));

/*------------------------------------------------4----------------------------------------------*/
console.log('*-------------------------------------------4--------------------------------------*');

function toDeleteChar (string, charToDelete) {
    let stringToArray = string.split('');

    for (let index of stringToArray) {
        for (let indexIn of charToDelete) {
            if (index === indexIn) {
                stringToArray.splice(stringToArray.indexOf(index), 1);
            }
        }
    }

    let newString = stringToArray.join('');
    return newString;
}

console.log(toDeleteChar('hello world', ['l', 'o']));

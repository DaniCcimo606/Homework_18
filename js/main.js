let result;

do {
    let operation = prompt('Что вы хотите сделать? (Сумма: " + ", разница: " - ", умножение: " * ", деление: " / ");').trim();
    
    if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {

        let firstNum = prompt('Введите первое число:');
        let secondNum = prompt('Введите второе число:');
        
        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert('Введите число!!!');
            continue;
        } else if (firstNum === null || secondNum === null) {
            alert('Операция была отменена!');
            break;
        } else if (firstNum == '' || secondNum == '') {
            alert('Была пустая строка!');
            continue;
        } else if (!isNaN(firstNum) && !isNaN(secondNum)) {
            firstNum = parseInt(firstNum);
            secondNum = parseInt(secondNum);
            if (operation == '+') {
                result = firstNum + secondNum;
            } else if (operation == '-') {
                result = firstNum - secondNum;
            } else if (operation == '*') {
                result = firstNum * secondNum;
            } else if (operation == '/') {
                result = firstNum / secondNum;
            }
        } else {
            alert('Error 404')
        }
    } else if (operation == '') {
        alert('Была пустая строка!');
        continue;
    } else if (operation != '+' || operation != '-' || operation != '*' || operation != '/') {
        alert('Вы ввели неверный символ!');
        continue;
    } else {
        alert('Error 404')
    }
    
    alert(result);
    console.log(result);
} while (true);



// let operation = prompt('Что вы хотите сделать? (Сумма - "+", разница - "-", умножение - "*", деление - "/")');

// if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
//     let firstNum = +prompt('Введите первое число:');
//     let secondNum = +prompt('Введите второе число:');

//     if (firstNum !== null && secondNum !== null) {
//         if (operation == '+') {
//             result = firstNum + secondNum;
//         } else if (operation == '-') {
//             result = firstNum - secondNum;
//         } else if (operation == '*') {
//             result = firstNum * secondNum;
//         } else if (operation == '/') {
//             result = firstNum / secondNum;
//         }
//     } else {
//         alert('Ok, goodbye :)');
//     }
// } else if (operation === null) {
//     alert('Ok, goodbye :)');
// } else {
//     alert('Sorry, invalid character :(');
// }

// console.log(result);
// main.innerHTML = result;



// let result = 0;

// let operation = prompt('Что вы хотите сделать? (Сумма - "+", разница - "-", умножение - "*", деление - "/")');

// let firstNum = +prompt('Введите первое число:');
// let secondNum = +prompt('Введите второе число:');

// if (operation == '+') {
//     result = firstNum + secondNum;
//     main.innerHTML = '${firstNum} + ${secondNum} = ${result}';
// } else if (operation == '-') {
//     result = firstNum - secondNum;
//     main.innerHTML = '${firstNum} - ${secondNum} = ${result}';
// } else if (operation == '*') {
//     result = firstNum * secondNum;
//     main.innerHTML = '${firstNum} * ${secondNum} = ${result}';
// } else if (operation == '/') {
//     result = firstNum / secondNum;
//     main.innerHTML = '${firstNum} / ${secondNum} = ${result}';
// }
let main = document.querySelector(`.main`);

// let result = 0;

// do {

//     let operation = prompt(`Что вы хотите сделать? (Сумма - "+", разница - "-", умножение - "*", деление - "/");`)
    
//     if (operation !== null) {
//         let firstNum = +prompt(`Введите первое число:`);
//         let secondNum = +prompt(`Введите второе число:`);
        
//         if (firstNum !== null || secondNum !== null) {
//             if (operation == `+`) {
//                 result = firstNum + secondNum;
//                 main.innerHTML = result;
//                 console.log(result);
//             } else if (operation == `-`) {
//                 result = firstNum - secondNum;
//                 main.innerHTML = result;
//                 console.log(result);
//             } else if (operation == `*`) {
//                 result = firstNum * secondNum;
//                 main.innerHTML = result;
//                 console.log(result);
//             } else if (operation == `/`) {
//                 result = firstNum / secondNum;
//                 main.innerHTML = result;
//                 console.log(result);
//             } else {
//                 alert(`Sorry, invalid character :(`);
//             }
//         } else {
//             continue;
//         }
//     } else {
//         break;
//     }
    
// } while (operation === null && firstNum === null && secondNum === null);



// let result = 0;

// let operation = prompt(`Что вы хотите сделать? (Сумма - "+", разница - "-", умножение - "*", деление - "/")`);

// if (operation == `+` && operation == `-` && operation == `*` && operation == `/`) {
//     let firstNum = +prompt(`Введите первое число:`);
//     let secondNum = +prompt(`Введите второе число:`);

//     if (firstNum !== null || secondNum !== null) {
//         if (operation == `+`) {
//             result = firstNum + secondNum;
//             main.innerHTML = result;
//             console.log(result);
//         } else if (operation == `-`) {
//             result = firstNum - secondNum;
//             main.innerHTML = result;
//             console.log(result);
//         } else if (operation == `*`) {
//             result = firstNum * secondNum;
//             main.innerHTML = result;
//             console.log(result);
//         } else if (operation == `/`) {
//             result = firstNum / secondNum;
//             main.innerHTML = result;
//             console.log(result);
//         }
//     } else {
//         alert(`Ok, goodbye :)`);
//     }
// } else if (operation === null) {
//     alert(`Ok, goodbye :)`);
// } else {
//     alert(`Sorry, invalid character :(`);
// }




let result = 0;

let operation = prompt(`Что вы хотите сделать? (Сумма - "+", разница - "-", умножение - "*", деление - "/")`);

let firstNum = +prompt(`Введите первое число:`);
let secondNum = +prompt(`Введите второе число:`);

if (operation == `+`) {
    result = firstNum + secondNum;
    main.innerHTML = `${firstNum} + ${secondNum} = ${result}`;
} else if (operation == `-`) {
    result = firstNum - secondNum;
    main.innerHTML = `${firstNum} - ${secondNum} = ${result}`;
} else if (operation == `*`) {
    result = firstNum * secondNum;
    main.innerHTML = `${firstNum} * ${secondNum} = ${result}`;
} else if (operation == `/`) {
    result = firstNum / secondNum;
    main.innerHTML = `${firstNum} / ${secondNum} = ${result}`;
}
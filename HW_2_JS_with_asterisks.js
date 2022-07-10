// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let a = 1
// let b = 2**10
// let i = 2
// while (i**a <= b){
//      console.log(i**a, end = ` `)
//     a += 1
// }

// 2 вариант решения:

// let a = 2
// for(let i = 1; i < 11; i++)
// console.log(a**i) 

// Можно без присвоения let a = 2. Тогда в console.log(2**i)

// 3 вариант решения:

// for(let i = 1; i < 11; i++)
// console.log(Math.pow(2,i))

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// function exponentiation(a) {let i = 2; console.log(i**a)}

// exponentiation(23)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// const arr = [`:)`, `:):)`, `:):):)`, `:):):):)`, `:):):):):)`,];
// for(let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку,
// которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// function printSmile(stroka, numberOfRows) {
//     let result = "";
//     for (let i = 0; i < numberOfRows; i++) {
//         result += stroka
//         console.log(result)
//     }
// }
// printSmile(":)", 4)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// function getWordStructure(word) {
// let vowelLetters = [`a`, `e`, `i`, `o`, `u`, `y`,];
// let consonantLetters = [`b`, `c`, `d`, `f`, `g`, `h`, `j`, `k`, `l`, `m`, `n`, `p`, `q`, `r`, `s`, `t`, `v`, `w`, `y`, `z`,];

// let vowelLettersCount = 0;
// let consonantLettersCount = 0;

// for(let char of word.toLowerCase()) {
//     if(vowelLetters.includes(char)) vowelLettersCount++
//     else if (consonantLetters.includes(char)) consonantLettersCount++
// }
//     console.log(`Слово ${word} состоит из ${vowelLettersCount} гласной(ых) и ${consonantLettersCount} согласной(ых) букв`)
// }

// getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
 
    word = word.toLowerCase()
    let theWholeWord = word.length;
    let halfAWord = Math.floor(theWholeWord/2);

    for ( let i = 0; i < halfAWord; i++ ) {
        if (word[i] !== word[theWholeWord - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrom("Kasha"))
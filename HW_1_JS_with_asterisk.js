// let age_1 = Null

// let age_2 = 18

// let age_3 = 60

// let checkAge = function(age_1) {
//     if (age_1 < age_2) {
//         console.log(`“You don’t have access cause your age is ”` + age_1 + `“ It’s less then”`)
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome") 
//     } else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channel")
//     } else console.log("Technical work")}


    //    checkAge(17)
    //    checkAge(18)
    //    checkAge(61)

// Задание 1*. Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let = age_1 = null

let age_2 = 18

let age_3 = 60

let checkAge = function(age_1) {
    if (typeof age_1 ==`number`) 
    {    if (age_1 < age_2) {
        console.log(`“You don’t have access cause your age is ”` + age_1 + `“ It’s less then”`)
    }    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome") 
     }  else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
     }   else {console.log("Technical work")}
    } else {console.log("error")
}
}

checkAge(4)
checkAge(18)
checkAge(60)
checkAge("dog")

//   Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных.
//   И если он не Number - кидалась ошибка.

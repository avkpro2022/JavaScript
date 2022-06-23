let = age_1 = null

let age_2 = 18

let age_3 = 60

let checkAge = function(age_1) {
    age_1 = Number(age_1)
    if (!isNaN(age_1))
    alert(age_1)
    if (typeof age_1 ==`number`)
    {    if (age_1 < age_2) {
        alert(`“You don’t have access cause your age is ”` + age_1 + `“ It’s less then”`)
    }    else if (age_1 >= age_2 && age_1 < age_3) {
        alert("Welcome") 
     }  else if (age_1 > age_3) {
        alert("Keep calm and look Culture channel")
     }   else {alert("Technical work")}
    } else {alert("error")
}
}

let w = prompt(`Enter your age_1`)
checkAge(w)


// Преобразовать задание 3* таким образом,
// чтобы возраст вводится используя функцию prompt в привязанной верстке
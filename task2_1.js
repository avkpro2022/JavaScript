// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью,
// например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require("fs");
let user = JSON.parse(fs.readFileSync("task2.json"))

function uniquiFuncl() {
    let uniquel = [];
    user.forEach(el => {
        if(!uniquel.includes(JSON.stringify(el))) uniquel.push(JSON.stringify(el))
    })
 return uniquel.map(el => JSON.parse(el))

}
console.log(uniquiFuncl())

// let uniquel = Array.from(naw.Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
// console.log(unique);
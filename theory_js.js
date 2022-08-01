// let i = 50;   
// while(i <= 100) {
//    console.log(i);
//    i++;
// }

// // let i = 20;  
// // do {
// //     console.log(i);
// //   i++;
// // } while (i <= 30);
 
// // for (let i = 200; i <= 250; i++) {
// //     console.log(i);
// //  }

// //  //сложение с применением преобразования к числу
// // console.log(+'1' + +'3'); //получим значение: 4

// // //декремент с постфиксной формой
// // let a = 3;
// // a++; 
// // console.log(a); //получим значение: 4


// // //инкремент с постфиксной формой
// // let b = 3;
// // b--; 
// // console.log(b); //получим значение: 2


// // //декремент с префиксной формой
// // a = 3;
// // console.log(++a); //получим значение: 4


// // //инкремент с префиксной формой
// // b = 3;
// // console.log(--b); //получим значение: 2


// // //возведение в степень
// // console.log(2 ** 3); //получим значение: 8
// // console.log(3 ** 2); //получим значение: 9

// // //остаток от деления:
// // console.log(11 % 2); //получим значение: 1
// // console.log(8 % 3); //получим значение: 2



// // let age = null

// // let name = null

// // let checkAge = function(age) {


// // if(age >= 18) 
// //     {console.log('Welcome')}
    

// //  else if (age < 18) {console.log('You are a baby')}

// // }
// // checkAge(`55`)

// // оператор switch

// let arg = +prompt('Сколько?');

// switch(arg) {
//     case 1:
//         alert('Значение переменной arg равно 1');
//     break;

//     case 3:
//         alert('Значение переменной arg равно 3');
//     break;

//     case 5:
//         alert('Значение переменной arg равно 5');
//     break;

//     default:
//         alert('Значение переменной arg равно: ' + arg);
// }

// // Вызов функции:

// function callPayment() {
//     let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
//     alert(`Счет пополнен на сумму ${amount} $`);
//  }
 
//  callPayment();

// //  или

//  function callPayment(currency) {
//     let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
//     alert(`Счет пополнен на сумму ${amount} ${currency}`);
//  }
 
 
//  let userCurrencyRub = '₽'; //валюта: рубль
//  let userCurrencyUSD = '$'; //валюта: доллар
 
//  callPayment(userCurrencyRub); //вызываем функцию с валютой: рубль
//  callPayment(userCurrencyUSD); //вызываем функцию с валютой: доллар

//  или

//  function callPayment(currency =  '$') {
//     let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
//     alert(`Счет пополнен на сумму ${amount} ${currency}`);
//  }
 
//  callPayment(); //применится валюта указанная по умолчанию
//  callPayment('₽'); //применится валюта: рубль


// Возврат функции:
// function sqr(a) {
//    let result = a * a;
 
//    return result;
//  }
 
//  let result = sqr(22); //теперь в переменной будет храниться значение 16
//  console.log(result);

// Объекты
// let toy = {
//   name: 'barbi',
//   material: 'plastic',
//   speak: function() {
//   console.log('I am a toy')
// },
//   myName() {
//     console.log('Hello, I am toy ' + this.name)
//   },
//   myColor() {
//     console.log('my color is red')
//   },
//   myWeight() {
//     console.log('My weight is 5 pounds')
//   }
// }

// toy.myWeight()

// function hi() {
//   console.log('Hello', this)
// }

// hi()

// const man = {
//   name: 'David',
//   lastName: 'Pupkin',
//   age: '22',
//   weight: 90,
//   say: hi

// }

// const woman = {
//   name: 'Katrin',
//   lastName: 'Pupkin',
//   age: '22',
//   weight: 90,
//   say: hi

// }


// const logger = {
//   info: function(sex) {
//   console.log('Имя: ', this.name);
//   console.log('Фамилия: ', this.lastName);
//   console.log('Возраст: ', this.age);
//   console.log('Пол: ', sex);
// }
// }
// const loggerMan = logger.info.apply(man, ['мужской']);
// const loggerWoman = logger.info.apply(woman, ['женский']);

// // loggerMan()
// // loggerWoman()

// function creatSocLink(socialNetwork) {
//   return function(nickname) {
//     return `rokoko${socialNetwork}/${nickname}`;
//   }
// }

// const creatSocVKLink = creatSocLink('vk')
// console.log(creatSocVKLink('durov'))

// Прототипы:

// const cat = {
//   name: 'Jeck',
//   weight: '5',
//   meow: function() {
//     console.log('meow')
//   }
// }

// cat.toString();


// const worker = {
//   name: 'Vasya',
//   position: 'engineer'
// };

// // console.log(worker)

// const manager = Object.create(worker);

// // console.log(manager)

// manager.name = 'Pety';
// manager.position = 'project manager'

// console.log(manager)

// console.log('zapros')
// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('turum-tu-tu');
//     const data = {
//       text: 'puru-ku-ku'
//     };

//     resolve(data);
//   }, 2000);
// });

// promise.then(data =>
//   new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     data.other = true;
//     resolve(data);
//   }, 2000)
// })
// ).then(data =>
//   console.log('eeeehhhhyyy', data)
// );

// console.log('zapros')
// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('turum-tu-tu');
//     const data = {
//       text: 'puru-ku-ku'
//     };

//     reject(new Error('puk-puk'));
//   }, 2000);
// });

// promise.then(data =>
//   new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     data.other = true;
//     resolve(data);
//   }, 2000)
// })
// ).then(data =>
//   console.log('eeeehhhhyyy', data)
// ). catch(err => console.error(err));

console.log('zapros')
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('turum-tu-tu');
    const data = {
      text: 'puru-ku-ku'
    };

    resolve(data);
  }, 2000);
});

promise.then(data =>
  new Promise(function(resolve, reject) {
  setTimeout(function() {
    data.other = true;
    resolve(data);
  }, 2000)
})
).then(data =>
  console.log('eeeehhhhyyy', data)
).catch(err =>
  console.error(err)
  ).finally(() =>
  console.log('end')
  );
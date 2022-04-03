// const person = {
//     name : "Maxim",
//     age : 25,
//     greet : function (){
//         console.log("Greet!")
//     }
// }

const person = new Object({
    name : "Maxim",
    age : 25,
    greet : function (){
        console.log("Greet!")
    }
})

Object.prototype.sayHello = function (){
    console.log("Hello!")
}

const lena = Object.create(person)

lena.name = "Elena";

// const str = "I am string";

const str = new String ("I am a string");

// Прототип це по факту батьківський об'єкт в середині іншого об'єкту. У нас є глобальний клас Object і він є найглибшим прототипом усіх об'єктів( по факту усі елементи в ДжаваСкрипті є об'єктами). Прототип працює таким чином, що спочатку викликана функція, ключ, чи метод ДжаваСкріпт шукає в самому об'єкті, якщо не знаходить, то йде вглиб зв'язки прототипів, як тільки знаходить повертає це значення (тобто завжди буде повернено значення з найвищого прототипу). Якщо ж в жодному з прототипів не буде знайдено потрібне значення, функція, метод = повертає помилку.
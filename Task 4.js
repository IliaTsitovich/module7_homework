// Task 4. Module 7. Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
// Удачи!

function ElectricalDeviceNameAndHisPower (name){        // все наши электрические приборы относятся к кухне 
  this.room = "kitchen",
  this.name = name
 }

 ElectricalDeviceNameAndHisPower.prototype.status = function() {
 this.status = prompt(`Прибор ${this.type}-${this.name} включен в розетку?: On -Включен, Off - выключен`)
 }

ElectricalDeviceNameAndHisPower.prototype.consumptionEnergy = function(){
  if(this.status=="On") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${1*this.power} kW в час`;
  } else if(this.status=="Off") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${0*this.power} kW в час`;
  } else if (this.status!="On"||this.status!="Off") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${0*this.power} kW в час`;
    alert(`Вы ввели не правильные значения "включения прибора"`);
  }
}


function Fridge (name,power) {
  this.type = "Fridge",
  this.power = power,
  this.name = name,
  this.property = "freeze",
  this.size = "big"
};

Fridge.prototype = new ElectricalDeviceNameAndHisPower();        

function Microwave (name,power) {
  this.type = "Microwave",
  this.power = power,
  this.name = name,
  this.property = "heat",
  this.size = "medium"
};

Microwave.prototype = new ElectricalDeviceNameAndHisPower();  


const fridge1 = new Fridge("SMAG",150);
const microwave1 = new Microwave("Horizont",250);
const microwave2 = new Microwave("Samsung",300);            
fridge1.status();                                           // определяем - присваиваем статус включения-выключения
microwave1.status();
microwave2.status();
fridge1.consumptionEnergy();                                 // определяем потребление электроэнергии в час 
microwave1.consumptionEnergy();                             // определяем потребление электроэнергии в час 
microwave2.consumptionEnergy();                            // определяем потребление электроэнергии в час 
console.log (fridge1,microwave1,microwave2);

// Task 5. Переписать консольное приложение из предыдущего юнита на классы.

class DeviceNameAndHisPower {
  constructor(name) {
    this.name = name;
  } 
  
  getStatus(){
    this.status = prompt(`Прибор ${this.type}-${this.name} включен в розетку?: On -Включен, Off - выключен`);
    if(this.status == "On") {
      return `Прибор ${this.type}-${this.name} - включен`
    } else if (this.status == "Off"){
      return `Прибор ${this.type}-${this.name} - выключен`
    } else if (this.status !== "Off" && this.status !== "On"){
      return `Вы ввели не правильное значение включения прибора`
    }
  }
  
}

class KitchenDevice extends DeviceNameAndHisPower{
  constructor(name,type,property,power) {
    super(name);
    this.type = type;
    this.property = property;
    this.power = power;
  }
  
    getConsumptionEnergy(){
    if(this.status === "On"){
      return `Текущая потребляемая мощность ${this.type}-${this.name} - ${1*this.power} kW в час`;
    } else if (this.status == "Off") {
      return `Текущая потребляемая мощность ${this.type}-${this.name} - ${0*this.power} kW в час`;
    } 
  }
}


const fridge1 = new KitchenDevice("Smag","Fridge","frezze",20);
console.log(fridge1.getStatus());
console.log(fridge1.getConsumptionEnergy());

const microwave1 = new KitchenDevice("Samsung","Microwave","heat",50);
console.log(microwave1.getStatus());
console.log(microwave1.getConsumptionEnergy());
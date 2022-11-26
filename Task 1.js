// Task 1. Module-7. Задание 1: Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

 function getKeyAndValueObj(theObject){            // объявили функцию
     for (let key in theObject) {                  // определяем итерацию по "ключам"
    if(theObject.hasOwnProperty(key)){             // условие - если есть собственные свойства - то ---
      console.log(` ${key} : ${theObject[key]} `)  // выводим во консоль значение ключ и значение
    };
  };
};

const town = {                                      // создаюм объект - прототип
  city: "Minsk"
}
const itemUser = Object.create(town);               // создаем протип объекта для использования общего свойства
itemUser.name = "Pitr";                             // добавили свои свойства
itemUser.age = 19;                                  // добавили свои свойства
getKeyAndValueObj(itemUser);         
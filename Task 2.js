// Task 2. Module 7 . Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function getPropertyInObject ( string, theObject) {   
      if(string in theObject === true) {                // если условия верны - наша строка - содержиться в имени свойств объекта -- то
        const result = true;                            // присваиваем значение в переменную 
        console.log (result);                           // выводим значение перемнной true
      } else {                                          // если нету нашей строки в имени -- то
        const result = false;                           // присваиваем значение в переменную 
        console.log (result);                           // выводим значение перемнной false
      };
  };

const user = {                                          // создали наш объект 
  name: "Ivan",                                         // добавим ключ - значение  
  age: 20,                                              // добавим ключ - значение 
  ownCity: "Brest"                                      // добавим ключ - значение 
};
getPropertyInObject("name", user);                      // вызоваем нашу функцию.
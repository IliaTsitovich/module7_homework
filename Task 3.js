// Task 3. Module 7.  Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.

const createNewObject = () => {
  const emptyObj = Object.create(null)
  console.log(emptyObj)
} 
createNewObject();
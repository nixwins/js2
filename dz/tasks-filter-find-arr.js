// Массивы для практики
const numbers = [2, -8, 13, 0, 45, -25, 32, 7, -15, 24, 66, -19, 80, 100, -45];
console.log(numbers);

const products = [
  { name: "Ноутбук", price: 45000, inStock: true, category: "Электроника" },
  { name: "Книга", price: 600, inStock: true, category: "Книги" },
  { name: "Смартфон", price: 25000, inStock: false, category: "Электроника" },
  { name: "Кофемашина", price: 12000, inStock: true, category: "Техника" },
  { name: "Футболка", price: 800, inStock: true, category: "Одежда" },
  { name: "Шкаф", price: 15000, inStock: false, category: "Мебель" },
];

const students = [
  { name: "Алексей", grades: [5, 4, 5, 4, 5], age: 19, group: "А" },
  { name: "Мария", grades: [4, 3, 4, 5, 4], age: 18, group: "Б" },
  { name: "Дмитрий", grades: [3, 3, 4, 3, 4], age: 20, group: "А" },
  { name: "Елена", grades: [5, 5, 5, 4, 5], age: 19, group: "Б" },
  { name: "Виктор", grades: [4, 4, 5, 4, 4], age: 18, group: "А" },
];

// Задачи для метода filter():

// 1. Отфильтровать числа:

const newNumbers = numbers.filter((item)=>{
  return item % 2 === 0;
})

console.log(newNumbers);

// - Найти все четные числа
// - Найти все числа больше 30

const bigSum = numbers.filter((item)=>{
  return item > 30;
})

console.log(bigSum);

// - Найти все отрицательные числа
const negativeSum = numbers.filter((number)=>{
  // return number < 0;
    if (number < 0 ) {
      return true;
    } else {
      return false;
    }
})

console.log(negativeSum);

// - Найти все числа, кратные 5

const multySum = numbers.filter((num)=>{
  return num % 5 === 0;
})

console.log(multySum);


// 2. Отфильтровать товары:
console.log(products);

// - Найти все товары дороже 20000

const newProduct = products.filter((item)=>{
  return item.price > 20000; 
})

console.log(newProduct);


// - Найти все товары категории 'Электроника'
const productCategory = products.filter((item)=>{
  return item.category === "Электроника";
})

console.log(productCategory);

// - Найти все товары в наличии

const productStock = products.filter((item)=>{
  return item.inStock;
})

console.log(productStock);

// - Найти все товары дешевле 1000 и в наличии

const minPrice = products.filter((item)=>{
  return item.price < 1000;
})

console.log(minPrice);


// 3. Отфильтровать студентов:
console.log(students);

// - Найти всех студентов группы 'А'
const groupStud = students.filter((item)=>{
  return item.group === "А";
})
console.log(groupStud);

// - Найти студентов со средним баллом выше 4
const averageGrades = students.filter((item)=>{
    for (let i = 0; i < item.grades.length; i++) {
      if (item.grades[i] > 4){
        return true;
      }else {
        return false;
      }
    }
})

console.log(averageGrades);

// - Найти всех студентов младше 20 лет

const yongStudents = students.filter((item)=>{
  return item.age < 20;
})
console.log(yongStudents);

// - Найти студентов, у которых есть хотя бы одна пятерка

const studentGrade = students.filter((item)=>{
  for (let i = 0; i < item.grades.length; i++) {
      if(item.grades[i] === 5){
        return true
      }else {
        return false
      }    
  }
})

// Что здесь не так?
console.log(studentGrade);


// Задачи для метода find():

// 1. Поиск в массиве чисел:
// - Найти первое число больше 50
const findNumber = numbers.find((item)=>{
 return item > 50;
})

console.log(findNumber);

// - Найти первое отрицательное число

const negativeNum = numbers.find((item)=>{
  return item < 0;
})

console.log(negativeNum);

// - Найти первое число, кратное 3

const firstNum = numbers.find((item)=>{
  return item % 3 === 0;
})

console.log(firstNum);


// 2. Поиск в массиве товаров:
// - Найти первый товар дороже 30000
const productFind = products.find((item)=>{
  return item.price > 30000;
})
console.log(productFind);

// - Найти первый товар категории 'Мебель'

const findFirstCategory = products.find((item)=>{
  return item.category === "Мебель";
})

console.log(findFirstCategory);

// - Найти первый товар не в наличии

const stockProduct = products.find((item)=>{
  return item.inStock === false;
})
console.log( stockProduct);


// 3. Поиск в массиве студентов:
// - Найти первого студента с идеальными оценками (все пятерки)
  const findIdealStudent = students.find((item)=>{
    for (let i = 0; i < item.grades.length; i++) {
      if(item.grades[i] === 5) {
        return true;
      } else {
        false;
      }     
    }
  })

  console.log(findIdealStudent);
  
// - Найти первого студента группы 'Б'

const studentGroup = students.find((item)=>{
  return item.group === "Б";
})

console.log(studentGroup);

// - Найти первого студента младше 19 лет

const studentYoung = students.find((item)=>{
  return item.age < 19;
})

console.log(studentYoung);

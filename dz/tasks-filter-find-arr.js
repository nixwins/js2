// Массивы для практики
const numbers = [2, -8, 13, 0, 45, -25, 32, 7, -15, 24, 66, -19, 80, 100, -45];

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
// - Найти все четные числа
// - Найти все числа больше 30
// - Найти все отрицательные числа
// - Найти все числа, кратные 5

// 2. Отфильтровать товары:
// - Найти все товары дороже 20000
// - Найти все товары категории 'Электроника'
// - Найти все товары в наличии
// - Найти все товары дешевле 1000 и в наличии

// 3. Отфильтровать студентов:
// - Найти всех студентов группы 'А'
// - Найти студентов со средним баллом выше 4
// - Найти всех студентов младше 20 лет
// - Найти студентов, у которых есть хотя бы одна пятерка

// Задачи для метода find():

// 1. Поиск в массиве чисел:
// - Найти первое число больше 50
// - Найти первое отрицательное число
// - Найти первое число, кратное 3

// 2. Поиск в массиве товаров:
// - Найти первый товар дороже 30000
// - Найти первый товар категории 'Мебель'
// - Найти первый товар не в наличии

// 3. Поиск в массиве студентов:
// - Найти первого студента с идеальными оценками (все пятерки)
// - Найти первого студента группы 'Б'
// - Найти первого студента младше 19 лет

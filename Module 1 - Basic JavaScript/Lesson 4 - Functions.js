/*Функции в JavaScript - это блоки кода, которые могут быть вызваны в любой части программы.
Они позволяют нам организовывать и повторно использовать код, делая наш код более модульным*/

function funcName() {
  console.log("Привет, мир!");
}

function newFunc(params) {
  // код, выполняемый функцией
}


//==========================================================================//


/*Варианты объявления функций*/

function functionName(a,b) { return a + b }

const anonymousFunction = function (a,b) { return a + b }

const arrowFunction = (a,b) => { return a + b }


//==========================================================================//


/*
Возвращаемое значение функции

Возвращаемое значение функции - это результат, который функция возвращает при её вызове. Когда функция выполняет свою работу, она может производить какие-то вычисления или операции и возвращать результат этих действий.

Функция в JavaScript может вернуть значение с помощью ключевого слова return. Когда в функции встречается оператор return, выполнение функции прекращается, и указанное значение возвращается в то место, где функция была вызвана.

Например, представь, что у нас есть функция multiply, которая принимает два числа и возвращает их произведение:
*/

function multiply(a,b) {
  let result = a + b;
  return result;
}


//==========================================================================//


/*
Объявление функции с использованием ключевого слова "function"

function functionName(a,b) { return a + b }

1. Может быть объявлена в любом месте в коде, и её можно вызвать до её объявления (hoisting)
2. Создает новый объект функции со свойствами, такими как name и length
3 .Внутри функции доступны ключевые слова this и arguments, которые указывают на контекст вызова функции и аргументы, переданные в функцию.
*/


/*
Функциональное выражение (Анонимная функция)

const anonymousFunction = function (a,b) { return a + b }

1. Функция присваивается переменной, что позволяет ей быть анонимной или именованной
2. Обычно используется для создания функций внутри других функций (замыкания) или для передачи функции в качестве аргумента другой функции (коллбэки)
3. Не поднимается вверх (не может быть вызвана до её объявления).
*/


/*
Стрелочная функция (Arrow function)

const arrowFunction = (a,b) => { return a + b }

Имеет более краткую синтаксическую форму и является анонимной по умолчанию
Не создает собственного контекста выполнения (this) и привязывает его к окружающему лексическому контексту
Не имеет доступа к ключевому слову arguments
Отлично подходит для простых и однострочных функций
*/



//==========================================================================//



/*
Рекурсия
Функции могут вызывать сами себя. Рекурсия полезна для решения задач, которые могут быть разделены на более маленькие подзадачи.
*/

function countdown(n) {
  if (n <= 0) {
    console.log("Done!")
  } else {
    console.log(n);
    countdown(n - 1)
  }
}

countdown(5);



//==========================================================================//


/*
Область видимости в JavaScript
Область видимости (scope) в JavaScript определяет, где и как переменные доступны в коде.
*/


/*
Глобальная область видимости
Глобальная область видимости охватывает весь код в файле JavaScript
Переменные, объявленные в глобальной области видимости, могут быть доступны из любого места в коде
Глобальные переменные могут быть объявлены с помощью ключевого слова var, let или const за пределами функций или блоков кода.
*/

// Глобальная переменная
const globalVariable = "I'm global variable";

const func = () => {
  // Обращение к глобальной переменной из функции
  console.log(globalVariable)
}



/*
Локальная область видимости
Локальная область видимости охватывает код, который находится внутри функций или блоков кода
Переменные, объявленные в локальной области видимости, называются локальными переменными и доступны только внутри этой области видимости
Локальные переменные могут быть объявлены с помощью ключевого слова var, let или const внутри функций или блоков кода.
*/

const myFunc = () => {
  // Локальная переменная
  const localVariable = "I'm local variable";

  console.log(localVariable);
}

myFunc(); // Выведет "I'm local variable"
console.log(localVariable); // Ошибка localVariable не определена




/*
Область видимости блока (Block Scope)
Область видимости блока охватывает код, который находится внутри блоков кода, таких как условные операторы (if, for, while) или блоки {}.
Переменные, объявленные в области видимости блока с помощью ключевого слова let или const, доступны только внутри этого блока
Область видимости блока была введена в ECMAScript 6 (ES6) и является новым типом области видимости.
*/

if (true) {
  // Блочная переменная
  let blockVariable = "I'm block variable";

  console.log(blockVariable);
}

console.log(blockVariable);  // Ошибка blockVariable не определена






//==========================================================================//






/*
Замыкания
Замыкание - это комбинация функции и её лексического окружения (лексической области видимости), в котором функция была объявлена
Замыкание позволяет функции сохранять доступ к переменным из своей внешней области видимости, даже после того, как внешняя функция завершила своё выполнение
Замыкания особенно полезны для создания приватных переменных и функций.
*/

function counter () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

let myCounter = counter();

myCounter();  // Выводит 1
myCounter();  // Выводит 2
myCounter();  // Выводит 3
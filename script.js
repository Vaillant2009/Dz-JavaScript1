let start = Number(prompt("1. Введіть початок діапазону:"));
let end = Number(prompt("Введіть кінець діапазону:"));
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

alert("Сума: " + sum);


let a = Number(prompt("2. Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));

while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

alert("НСД: " + Math.abs(a));


let number = Number(prompt("3. Введіть число:"));

for (let i = 1; i <= Math.abs(number); i++) {
    if (number % i == 0) {
        console.log(i);
    }
}

alert("Дільники виведені в консоль.");


let num = Number(prompt("4. Введіть число:"));
num = Math.abs(num);
let digits = 0;

if (num == 0) {
    digits = 1;
} else {
    while (num > 0) {
        num = Math.floor(num / 10);
        digits++;
    }
}

alert("Кількість цифр: " + digits);


let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("5. Введіть число №" + (i + 1)));

    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    } else {
        zeros++;
    }

    if (num % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}

alert(
    "Додатних: " + positive +
    "\nВід'ємних: " + negative +
    "\nНулів: " + zeros +
    "\nПарних: " + even +
    "\nНепарних: " + odd
);


let again;

do {
    let first = Number(prompt("6. Введіть перше число:"));
    let second = Number(prompt("Введіть друге число:"));
    let operation = prompt("Введіть знак +, -, * або /:");
    let result;

    if (operation == "+") {
        result = first + second;
    } else if (operation == "-") {
        result = first - second;
    } else if (operation == "*") {
        result = first * second;
    } else if (operation == "/") {
        result = first / second;
    } else {
        result = "Невідомий знак";
    }

    alert("Результат: " + result);
    again = confirm("Хочете розв'язати ще один приклад?");
} while (again);


let number7 = prompt("7. Введіть число:");
let shift = Number(prompt("На скільки цифр змістити?"));

shift = shift % number7.length;

let result7 = number7.slice(shift) + number7.slice(0, shift);

alert("Результат: " + result7);


let days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя"
];

let day = 0;
let showNext;

do {
    showNext = confirm(
        days[day] + ". Бажаєте побачити назву наступного дня тижня?"
    );

    day++;

    if (day == 7) {
        day = 0;
    }
} while (showNext);


for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

alert("Таблиця множення виведена в консоль.");


let min = 0;
let max = 100;
let guessed = false;

while (!guessed) {
    let n = Math.floor((min + max) / 2);

    let answer = prompt(
        "10. Ваше число > " + n + ", < " + n + " або == " + n + "?"
    );

    if (answer == ">") {
        min = n + 1;
    } else if (answer == "<") {
        max = n - 1;
    } else if (answer == "==") {
        alert("Ваше число: " + n);
        guessed = true;
    }
}


function power(number, degree) {
    if (degree == 0) {
        return 1;
    }

    return number * power(number, degree - 1);
}

let number11 = Number(prompt("11. Введіть число:"));
let degree11 = Number(prompt("Введіть ступінь:"));

alert("Результат: " + power(number11, degree11));


function gcd(a, b) {
    if (b == 0) {
        return Math.abs(a);
    }

    return gcd(b, a % b);
}

let number12a = Number(prompt("12. Введіть перше число:"));
let number12b = Number(prompt("Введіть друге число:"));

alert("НСД: " + gcd(number12a, number12b));


function maxDigit(number) {
    number = Math.abs(number);

    if (number < 10) {
        return number;
    }

    let digit = number % 10;
    let max = maxDigit(Math.floor(number / 10));

    if (digit > max) {
        return digit;
    }

    return max;
}

let number13 = Number(prompt("13. Введіть число:"));

alert("Найбільша цифра: " + maxDigit(number13));


function isPrime(number, divisor) {
    if (number < 2) {
        return false;
    }

    if (divisor * divisor > number) {
        return true;
    }

    if (number % divisor == 0) {
        return false;
    }

    return isPrime(number, divisor + 1);
}

let number14 = Number(prompt("14. Введіть число:"));

if (isPrime(number14, 2)) {
    alert("Число просте.");
} else {
    alert("Число не просте.");
}


function factors(number, divisor) {
    if (number == 1) {
        return "";
    }

    if (number % divisor == 0) {
        return divisor + " " + factors(number / divisor, divisor);
    }

    return factors(number, divisor + 1);
}

let number15 = Number(prompt("15. Введіть число:"));

alert("Множники: " + factors(number15, 2));


function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let number16 = Number(prompt("16. Введіть порядковий номер Фібоначчі:"));

alert("Число Фібоначчі: " + fibonacci(number16));


function compare(a, b) {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}

let number17a = Number(prompt("17. Введіть перше число:"));
let number17b = Number(prompt("Введіть друге число:"));

alert(compare(number17a, number17b));


function factorial(number) {
    if (number == 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

let number18 = Number(prompt("18. Введіть число:"));

alert("Факторіал: " + factorial(number18));


function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}

let number19a = Number(prompt("19. Введіть першу цифру:"));
let number19b = Number(prompt("Введіть другу цифру:"));
let number19c = Number(prompt("Введіть третю цифру:"));

alert("Число: " + makeNumber(number19a, number19b, number19c));


function rectangleArea(length, width) {
    if (width == undefined) {
        return length * length;
    }

    return length * width;
}

let length20 = Number(prompt("20. Введіть довжину:"));
let width20 = prompt("Введіть ширину або натисніть Cancel:");

if (width20 == null) {
    alert("Площа квадрата: " + rectangleArea(length20));
} else {
    alert("Площа прямокутника: " + rectangleArea(length20, Number(width20)));
}


function perfect(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    return sum == number;
}

let number21 = Number(prompt("21. Введіть число:"));

if (perfect(number21)) {
    alert("Число досконале.");
} else {
    alert("Число не досконале.");
}


function perfectNumbers(min, max) {
    let result = "";

    for (let i = min; i <= max; i++) {
        if (perfect(i)) {
            result += i + " ";
        }
    }

    return result;
}

let min22 = Number(prompt("22. Введіть мінімальне число:"));
let max22 = Number(prompt("Введіть максимальне число:"));

alert("Досконалі числа: " + perfectNumbers(min22, max22));

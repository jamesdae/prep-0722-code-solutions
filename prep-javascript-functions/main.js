function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes from hours:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('James');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumMultiplied = addAndMultiplyBy5(11, 5);
console.log('Sum Multiplied by 5: ', sumMultiplied);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var timesAndDivide = multiplyAndDivideBy5(35, 10);
console.log('Multiplied and Divided by 5: ', timesAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(30, 8);
console.log('Difference of two numbers: ', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference of circle with given radius: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('James', 'Yang');
console.log('Full name: ', fullName);

function cube(num) {
  return Math.pow(num, 3);
}

var cubed = cube(5);
console.log('Number cubed: ', cubed);

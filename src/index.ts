// console. log('Hello World');
// let age: number = 20;
// if (age < 50)
//   age += 10;
// console. log(age);
// let sales: number = 123_456_789; 
// let course: string = 'TypeScript';
// let is_published: boolean = true;
let sales = 123_456_789; 
let course = 'TypeScript';
let is_published = true;
let level;
// level = 1;
// level = 'a';
// function render(document) {
//   console.log(document);
// }
function render(document: any) {
  console.log(document);
}
//Array
// let numbers = [1, 2, '3']; correct with Normal Js
// let numbers: number[] = [1, 2, '3'];
// let numbers = [1, 2, 3];
// let numbers = []; //to use any empty array you have to apply a type anotation
// numbers[0] = 1;
// numbers[1] = '1';
// let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = '1';
// let numbers: number[] = [];
// numbers.forEach(n => n.)

//Tuples
// let user: [number, string] = [1, 'Mosh', 0];
// let user: [number, string] = ['1', 'Mosh']; complilation error
// let user: [number, string] = [1, 'Mosh'];
// user[0].
// user[1].
// let user: [number, string] = [1, 'Mosh'];
// user.push(1); //gap in typeScript
let user: [number, string, boolean, number] = [1, 'Mosh', true, 0]; //tuples are most usefull with 2 values

//Enums rep a list of related constants
//list of tshirt sizes
const small = 1;
const medium = 2;
const large = 3;

// PascalCase Naming convention
// enum Size { Small = 0, Medium = 1, Large = 2}; //typeScript default
// enum Size {Small = 1, Medium = 2, Large = 3 }; //we set our own values
// enum Size {Small = 's', Medium = 'm', Large = 'l' };
// enum Size {Small = 1, Medium, Large}; 
// let mySize: Size = Size.Medium;
// console.log(mySize);
// const enum Size {Small = 1, Medium, Large}; 
// let mySize: Size = Size.Medium;
// console.log(mySize);

//functions
// function calculateTax(income: number) {

// }
// function calculateTax(income: number) {
//   return 0;
// }
// function calculateTax(income: number): void {
  
// }
// function calculateTax(income: number): number {
//   return 0;
// }
// function calculateTax(income: number): number { if (income < 50_000)
//   return income * 1.2; // JavaScript always returns undefined function
// undefined is not a number}
// function calculateTax(income: number) { if (income < 50_000)
//   return income * 1.2; // if the result is greater than 50_000, we are going to get undefined and this may cause a bug in our application
// }
// function calculateTax(income: number) { if (income < 50_000)  
//  return income * 1.2;
//  return income * 1.3;
// }
// function calculateTax(income: number): number { let x;
//   if (income < 50_000)  
//   return income * 1.2;
//   return income * 1.3;
//  }
// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2022)  
//   return income * 1.2;
//   return income * 1.3;
//  }

//  calculateTax(10_000, 2022);
// function calculateTax(income: number, taxYear?: number): number {
//   if (taxYear < 2022)  
//   return income * 1.2;
//   return income * 1.3;
//  }

//  calculateTax(10_000); //if the taxyear is not given, the result will be undefined
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022)  
//   return income * 1.2;
//   return income * 1.3;
//  }

//  calculateTax(10_000);
// function calculateTax(income: number, taxYear = 2022): number {
//   if ((taxYear || 2022) < 2022)  
//   return income * 1.2;
//   return income * 1.3;
//  }

//  calculateTax(10_000, 2023); //what is passed (2023) will over ride the default value 2022
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)  
  return income * 1.2;
  return income * 1.3;
 }

 calculateTax(10_000);
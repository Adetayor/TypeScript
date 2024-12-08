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
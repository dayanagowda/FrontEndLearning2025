//Filter-Select Elements
//Get even numbers
const numbers=[1,2,3,4,5,6];
const evens=numbers.filter((num)=>num%2===0);
console.log(evens); //[2,4,6]

//get long words
const words=["cat","elephant","dog","butterfly"];
const longWords=words.filter((words)=>words.lenght>4)
console.log(longWords); //['elephant','butterfly']

//get affordable items
const prices=[50,15,200,30,500];
const affordable=prices.filter((price)=>price<100);
console.log(affordable); //[50,15,30]

//get adults only
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 34 },
  { name: "Dayana", age: 20 },
];
const adults=people.filter((person)=>person.age>=18);
console.log(adults);
//[{name:'Alice',age:25},{name:'Charlie',age:30}]
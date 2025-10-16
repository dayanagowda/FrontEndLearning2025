//Map - Transform Each Element

//Double each number
const numbers=[1,2,3,4,5];
const doubled=numbers.map((num)=>num*2);
console.log(doubled); //[2,4,6,8,10]

//convert to uppercase
const fruits=["apple","banana","orange"];
const upperFruits=fruits.map((fruit)=>fruit.toUpperCase());
console.log(upperFruits); //['APPLE','BANANA','ORANGE']

//Add $ to prices
const prices=[10,20,30];
const priceTags=prices.map((prices)=>"$"+prices);
console.log(priceTags);

//Add tax to prices
const product=[100,50,200];
const productTax = product.map((product) => prices*1.08);
console.log(productTax);

//Get names from object
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 34 },
];
const names= users.map((user)=>user.name);
console.log(names); //['Alice','Bob','Charlie']

//calculate areas
const rectangles = [
  { width: 10, height: 5 },
  { width: 8, height: 3 },
  { width: 15, height: 10},
];
const areas=rectangles.map((rect)=>rect.width*rect.height);
console.log(areas); //[50,24,150]
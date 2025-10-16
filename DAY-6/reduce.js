//Reduce-Accumulate Values

//Sum of numbers
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((total,num)=>total+num,0);
console.log(sum);//15

//find maximum
const scores=[85,42,90,65,95];
const maxScore=scores.reduce((max,scores)=>Math.max(max,scores),scores[0]);
console.log(maxScore);//95

//combine words
const words=["Hello","World","!"];
const sentence=words.reduce((text,words)=>text+" "+words," ");
console.log(sentence.trim()); //"Hello World!"

//shopping cart total
const cart = [
  { item:"book",price:20,quantity:2},
  {item:"pen",price:3,quantity:5},
  {item:"notebook",price:8,quantity:1},
];
const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
console.log(total); //63
//update objects
const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
  { name: "Charlie", active: false },
];
users.forEach((user)=>(user.active=true));
console.log(users);
//all users now have active:true

//send notifications
const userDetails = [
  { name: "Alice", email: "alice@gmail.com "},
  { name: "Bob", email: "bob@gmail.com" },
  { name: "Charlie", email: "charlie@gmail.com" },
];
const notifications=[];
userDetails.forEach((user)=>{
    notifications.push(`Email sent to${user.name}at${user.email}`);
});
console.log(notifications);
//*

//"Email sent to Alice at alice@gmail.com",
//"Email sent to Bob at bob@gmail.com",
//"Email sent to Charlie at charlie@gmail.com",
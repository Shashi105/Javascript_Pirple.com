/*
Function Expression
*/


const users=[
  {name:"Shashi",age:25},
  {name:"Sekhar",age:35},
  {name:"Giri",age:45}
]

const userList= users.map(function (user){
  return user.name;
}
);

console.log(userList);


/*
Arrow Function
*/

const users=[
  {name:"Shashi",age:25},
  {name:"Sekhar",age:35},
  {name:"Giri",age:45}
]

const userList= users.map( (user)=>{
  return user.name;
}
);

console.log(userList);
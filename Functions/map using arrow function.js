/*
Inbuilt function using arrow function
*/
const users=[
  {name:"Shashi",age:25},
  {name:"Sekhar",age:35},
  {name:"Giri",age:45}
];

const mapUsersName=(userArr)=>{ 
const userList= userArr.map( (user)=>{
  return user.name;
}
);
 
  return userList;
  
}


console.log(mapUsersName(users));



/*
Inbuilt function using function expression
*/
const users=[
  {name:"Shashi",age:25},
  {name:"Sekhar",age:35},
  {name:"Giri",age:45}
];

function mapUsersName(userArr){ 
const userList= userArr.map( (user)=>{
  return user.name;
}
);
 
  return userList;
  
}


console.log(mapUsersName(users));

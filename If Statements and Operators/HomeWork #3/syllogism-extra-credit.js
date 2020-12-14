
const cake="Chocolate";
const vanilla="Vanilla";
const chocolate="Chocolate";



function checkCakeType(cakeType){
  if(cake===vanilla || cake===chocolate){
  console.log("This cake is either vanilla or chocolate.");
  if(!(cake===chocolate)){
    console.log("This cake is not chocolate."); 
    console.log("Therefore, this cake is vanilla."); 
  }
  else{
    console.log("This cake is not vanilla."); 
    console.log("Therefore, this cake is chocolate."); 
  }
}
}


checkCakeType("Vanilla");
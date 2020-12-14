

let manArray=["Socrates", "Plato","Shashi","Tom Cruise"];
let mortalArray=["Lion","Coconut","Weeping Willow",manArray];



function checkMortality(name){
  if(name && ((typeof name)==="string")){
    if(mortalArray.includes(manArray)){
      if(manArray.includes(name)){
        return true;
      }else return false;
    }else return false;
 }else return "Invalid Name"
};




console.log(checkMortality(""));




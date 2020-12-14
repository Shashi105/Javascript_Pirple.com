

let manArray=["Socrates", "Plato","Shashi","Tom Cruise"];
let mortalArray=["Lion","Coconut","Weeping Willow",manArray];



function checkMortality(){
  if(mortalArray.includes(manArray)){
	  console.log("All men are mortal");
    if(manArray.includes("Socrates")){
	  console.log("Socrates is a man.");
      console.log("Therefore, Socrates is mortal.");
  }
}};




checkMortality();





const cakeType=["vanilla","chocolate"];



 const  checkCakeType= (cakeArr, isChocolate)=>{
    let cakeFlavor;
    if(isChocolate){
     cakeArr.forEach((item)=>{
           if(item==="chocolate")
             {
               cakeFlavor= item;
             }
      });         
    }
   else {
     cakeArr.forEach((item)=>{
           if(item!=="chocolate")
             {
               cakeFlavor= item;
             }
      }); 
        
   }
   
   return cakeFlavor;
 }
   
 
 console.log(checkCakeType(cakeType,false));
 
 
 
 
 
 
 
 
 
const checkValidation= function(value, label){
  let arr1;
  let labelArr1=["seconds", "minutes", "hours", "days"];
  let labelArr2=["second", "minute", "hour", "day"];
  
  if(((value>=0)))
     {
     if((labelArr1.includes(label) || labelArr2.includes(label) ))
     {
       switch(value){
         case 1:
                if(labelArr2.includes(label)){
                  arr1= [value,label];
                  break;
                }
                 else{
                   return false;
                 }
         default:
           if(labelArr1.includes(label)){
                  arr1= [value,label];
                  break;
                }
                 else{
                   return false;
                 }
       };
       return arr1;
     }
      else
      {
          return false;
      }
  
}
         
     else{
       return false;
      }
  
}



 const convertToSeconds = function (value,label){
   let newValue;
   let newLabel;
   
   if((label.slice(-1))==="s"){
     newLabel=label.slice(0, -1);
   } 
   else{
     newLabel=label;
   }
    switch(newLabel){
     case "day":
       newValue=value*3600*24;
       break;
        case "hour":
       newValue=value*3600;
       break;
        case "minute":
       newValue=value*60;
       break; 
       default:
       newValue=value;
       break; 
   }
  
   return newValue;
  
 }





const timeAdder=function(value1, label1, value2, label2){
  let time1;
  let time2;
  let time1InSec;
  let time2InSec;
  let timeFinal=[];
  time1= checkValidation(value1,label1);
  time2= checkValidation(value2,label2);
  time1InSec=convertToSeconds(value1,label1);
  time2InSec=convertToSeconds(value2,label2);
 
  
  if((time1 && time2)){
    if(time1InSec && time2InSec){
      
     timeFinal[0]= (time1InSec+time2InSec);
     if((timeFinal[0]%(3600*24))===0){
               timeFinal[0]=timeFinal[0]/(3600*24);
        if(timeFinal[0]>=2)
         {
          timeFinal[1]="days" ;
           return timeFinal;
         }
       else{
         timeFinal[1]="day" ;
           return timeFinal;
       }
      }
      

      
      
      else if((timeFinal[0]%3600)===0){
        timeFinal[0]=timeFinal[0]/3600;
        if(timeFinal[0]>=2)
         {
          timeFinal[1]="hours" ;
           return timeFinal;
         }
       else{
         timeFinal[1]="hour" ;
           return timeFinal;
       }
      }
      else if((timeFinal[0]%60)===0 ){
       timeFinal[0]=timeFinal[0]/60;
       if(timeFinal[0]>=2)
         {
          timeFinal[1]="minutes" ;
           return timeFinal;
         }
       else{
         timeFinal[1]="minute" ;
           return timeFinal;
       }
     }
      
      else{
         if(timeFinal[0]>=2)
         {
          timeFinal[1]="seconds" ;
           return timeFinal;
         }
       else{
         timeFinal[1]="second" ;
           return timeFinal;
       }
      }
      
    }

  }
  else{
    return false;
  }

  
}






console.log(timeAdder(1,"day",3,"seconds"));










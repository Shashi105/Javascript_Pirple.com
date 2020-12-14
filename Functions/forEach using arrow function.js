const numbers=[1,2,3,4,5,6,7];


const doubledNumbers= (num)=>{
  const numberContainer=[];
  num.forEach((n)=>{
    
              const doubled=n * 2;
              numberContainer.push(doubled);
  }
  )
    return numberContainer;
}


console.log(doubledNumbers(numbers));
/*
Hoisting: 
the variable and function declarations are put into memory during the compile phase before any other code gets executed.

Hoisting in Javascript:
In JavaScript only declarations are hosted not initialization. Suppose, we consider example given here :
console.log(num); // will result in undefined, as initialization happened after declaration
 var = num;
 num=67;
*/

/*

let has block scope and can be re-intialized, but when we try to access it inside another block/outside the declared block it will throw an error, on other hand, const is pretty much behaves same as let but can't be re-intialized. One misconception about const is that it can't be modified as well, but in case of array and objects we can add or modify elements even if its initialized as const.

When it comes to var declaration, if it's declared inside a block then it has block scope but that dosen't mean we can't re-intialize and access it out of its scope, with some warning we still can access it outside the declared block, it will not throw any error as let and const does.

In short, we should refrain from using var very often, instead we should use let and const, let is used for the variables whose value can be
changed/re-assigned but const can be used for variables whose value is const during whole code execution e.g, let should be used for any mathematical calculations, const should be  used for storing any Http Link or any IP Address.

*/



function varDemo(){
	var myName="Shashi";
	var isName=true;
	
	if(isName){
		var lastName="Giri";
		myName="Sekhar";
		console.log(myName);
	};
	lastName="Sekhar";
	console.log(lastName);
};

varDemo();





function letDemo(){
	let isEven=true;
	let num=2;
	
	if(isEven){
		let count=1;
		num=2*2;
		count+=1;
		console.log(num);
	}
	/*console.log(count);*/
	//will throw an error as let variables can only be accessed within the block
};


letDemo();


function constDemo(){
	const webLink="http://www.google.com";
	console.log(webLink);	
}


constDemo();
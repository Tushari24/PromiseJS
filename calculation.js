
/**
setTimeout(function(){
	console.log( 1+1 ); //here console.log you can think of handler or resolver function 

}, 1000);
*/


// using promise 
var calculationPromise = new Promise( function ( resolve, rejet) {

	// code to excute in promise
	setTimeout(function(){
		resolve( 1+1 ); //here instead of console.log we can use the resolve so after promise fulfilled
						//this value is going to be resolved 

	}, 1000);

});

var calculationPromise2 = new Promise( function ( resolve, rejet) {

	// code to excute in promise
	setTimeout(function(){
		resolve( 1+2 ); //here instead of console.log we can use the resolve so after promise fulfilled
						//this value is going to be resolved 

	}, 500);

});

//instead of callback function i have used lambda function 
calculationPromise.then( (value) => {
	console.log("value from promise " +value);
}).catch( (Error) => {
	console.log("Something Went Wrong" +Error);
});

//Chained resolver demo
/*uncomment to excute */
calculationPromise.then( (value) => {
	return value + 12;
}).then( (nextValue) => {
	console.log(" Final value is " +nextValue);
	
}).catch( (error) => {
	console.log("Something Went Wrong " +error);
});

// Your not restricted to the callback fun or lambda fun you can also pass
// named function as resolver function in then()

function addTwo(value) {
	return value + 1;
}

function printValue(nextValue) {
	console.log(" Final value is " +nextValue);
}

/**This is Usefull pattren it can also help in unit testing 
 * and more modular approach and cleaner and easier to follow
*/
calculationPromise.then(addTwo)
				  .then(printValue);

				  
 calculationPromise2.then(addTwo)
 					.then(addTwo)
 					.then(printValue);
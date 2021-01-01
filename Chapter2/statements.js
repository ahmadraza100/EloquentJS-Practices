console.log("Chapter2");

// let mul = 5+1*2;

// alert("Your Output is = " + mul*10);

// mul = mul -2;

// alert("Your Output is = " + mul*10);


// let a = prompt("Enter your Name" , "Enter First Name");
// let b = prompt("Enter your Name" , "Enter Last Name");
// let c = prompt("Enter your Salery" , "Enter your Income");
 
// fullName = a + b ;
// let d = `Hi \"${fullName}"\ . Have a great day \n Your First Name is "${a}" \n Your Last Name is "${b}" \n Your salary is ${c}\n\t Thanks for Your Time` ; 
// alert(d);


//Intro to Functions

// let a =prompt("Enter your Password") ;

// let b =prompt("Enter your Password") ;
// alert(checkPassword());


// function checkPassword{
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     if(a.match(b)===true){
//         alert("Congratulations . Your Password is Correct");
//     }
//     else{
//         alert("Sorry! Your Password is incorrect")
//     }

// }


// let theNumber = Number(prompt("Pick a number"));
// if (Number.isNaN(theNumber)!==NaN) {
//   console.log("Your number is the square root of " +
//               theNumber * theNumber);
// }

let theNumber = Number(prompt("Pick a number"));
if (Number.isNaN(theNumber)==false) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  alert("Hey. Why didn't you give me a number?");
}




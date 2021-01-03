// console.log("Functions"); 

// let functionn = function square(x){

//     return x*x; 
// }
// console.log(functionn(5));


// const makeNoise = function noise(){
//     console.log("Pling");
// }
// makeNoise();

// let power = function(base , exponent){
//     let result =1; 
//     for(let i=0 ; i<exponent ; i++){

//         result= result*base;

//     }
//     return result;
// }

// console.log(power(2,4));

//         // SCOPE

//         let x = 5 ;

//         if(true){
//             let y = 20 ; 
//             var z = 50; 
//             console.log(x + y + z);
//         }
//         console.log(x  + z);


    

//         let n = 200;
//         let halve = function hal(n){

//             return n/2 ; 

//         }
//         console.log(halve(200));
//         console.log(n);

        
//         const hummus = function(factor) {
//             ingredient = function(amount, unit, name) {
//               let ingredientAmount = amount * factor;
//               if (ingredientAmount > 1) {
//                 unit += "s";
//               }
//               console.log(`${ingredientAmount} ${unit} ${name}`);
//             };
//             console.log(ingredient(1, "can", "chickpeas"));
//             console.log(ingredient(0.25, "cup", "tahini"));
//             console.log(ingredient(0.25, "cup", "lemon juice"));
//             console.log(ingredient(1, "clove", "garlic"));
//             console.log(ingredient(2, "tablespoon", "olive oil"));
//             console.log(ingredient(0.5, "teaspoon", "cumin"));
//           };


//           let name = prompt("Enter your Name");
//           let income = prompt("Enter your Salary");

//           messege(name , income);

          
//           function messege (a , b){
//             a = name.toUpperCase();
//             if(b > 10000){
//                 console.log(`Dear ${a} ,Your Salary is ${b}`);
//                 console.log("you Should focus to earn more");
//             }
//             else if(b > 50000){
//                 console.log(`Dear ${a} ,Your Salary is ${b}`);
//                 console.log("you Should focus on your dreams");
//             }
//             else if(b < 1){
//                 console.log(`Dear ${a} ,Your Salary is ${b}`);
//                 console.log("you Should do something");
//             }

//           }

//           let powerr =(base , exponent) =>{
//               let result = 1 ; 
//               for (i = 0 ; i < exponent ; i++){
//                   result = result * base ; 
//               }
//               return result; 
//           }

//           alert(powerr(4,5));


          let horn = () =>{
              return "Pummm";
          }
          console.log(horn());

          let square = x => {return x*x;}
          console.log(square(4));

        //   function on(){
        //       return off(); 
        //   }
        //   function off(){
        //       return on();
        //   }

        //   console.log(on() + "came First")

        // let name = prompt("Enter your name"); 
      
        
        // function name1(namee){
        //     namee = name.toUpperCase();
        //     if(namee.length<4){
        //         console.log(` ${namee}\'s`);
        //     }
        //     else
        //     console.log(namee);
            
        // }
        // name1(name);

        // let name1 = prompt("Enter the name of first Item");
        // let bil1 = prompt(`Enter the Price of ${name1}`);

        // let name2 = prompt("Enter the name of second Item");
        // let bil2 = prompt(`Enter the Price of ${name2}`);

        // let name3 = prompt("Enter the name of third Item");
        // let bil3 = prompt(`Enter the Price of ${name3}`);

      
 

        

        // function bill(amount=0 ,x , y, z ,tip , firstName , secondName , lastName)
          
        // {
        //     firstName = firstName.toUpperCase();
        //   secondName=secondName.toUpperCase();
        //   lastName=lastName.toUpperCase();
         

          
        
            
         
        //     console.log( `The price of ${firstName} is = ${x}` );
        //     console.log( `The price of ${secondName} is = ${y}` );
        //     console.log( `The price of ${lastName} is = ${z}` );

        //     amount = x+y+z ; 
        //     amount = amount.parseInt();

        //     console.log(`Total bill is ${amount}`)

        //     tip = amount*0.75;
        //     console.log(`Availed 25% OFF. Current bill is ${tip}`);
        // }
          
        // bill(0,bil1,bil2,bil3,0,name1,name2,name3);





        // function wrapValue(n) {
        //     let local = n;
        //     return () => local;
        //   }
          
        //   let wrap1 = wrapValue(1);
        //   let wrap2 = wrapValue(2);
        //   console.log(wrap1());
        //   // → 1
        //   console.log(wrap2());



        // //   recursion

        // function power(base, exponent) {
        //     if (exponent == 0) {
        //       return 1;
        //     } else {
        //       return base * power(base, exponent - 1);
        //     }
        //   }
          
        //   let a = prompt("Enter your base")
        //   let p = prompt("Enter your power")
        //   alert(power(a,p));




        //   function findSolution(target) {
        //     function find(current, history) {
        //       if (current == target) {
        //         return history;
        //       } else if (current > target) {
        //         return null;
        //       } else {
        //         return find(current + 5, `(${history} + 5)`) ||
        //                find(current * 3, `(${history} * 3)`);
        //       }
        //     }
        //     return find(1, "1");
        //   }
          
        //   console.log(findSolution(24));


          let a = prompt("Enter FIRST NUM");
          let b = prompt("Enter second number");

          let min =  (firstNum , secondNum) =>{
             
            if (firstNum<secondNum){
                return (firstNum);
            }
            else {
                return (secondNum);
            }
        
          }
          
          console.log(min(a,b));
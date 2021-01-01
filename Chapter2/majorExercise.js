console.log("majorExercise");
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);
// }


//fizzbuzz

for (let i=1 ; i<=100 ; i++){
    if(i%3==0){
        console.log("Fizz");
    }

    else if(i%5==0){
        console.log("Buzz");
    }

    else{
        console.log(i);
    }
}


//chessboard 

let length  = 10 ; 
let board =""; 
for (let i=1; i<length ; i++){
    for (let j=1  ; j<length ; j++){
        if((i+j)%2!=0){
            board +="#";
        }
        else{
            board +=" ";
        }
        board +="\t"
    }
    
    board+="\n"
}
console.log(board);
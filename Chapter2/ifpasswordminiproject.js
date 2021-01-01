let a =prompt("Enter your Password") ;

let b =prompt("Enter your Password") ;


function checkPassword(){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a===b || a==b){
        alert("Congratulations . Your Password is Correct");
    }
    else{
        alert("Sorry! Your Password is incorrect")
    }
}

alert(checkPassword());
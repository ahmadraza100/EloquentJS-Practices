
        //   let a = prompt("Enter FIRST NUM");
        //   let b = prompt("Enter second number");

        //   let min =  (firstNum , secondNum) =>{
             
        //     if (firstNum<secondNum){
        //         return (firstNum);
        //     }
        //     else {
        //         return (secondNum);
        //     }
        
        //   }
          
        //   console.log(min(a,b));

        function countChar(string, ch) {
            let counted = 0;
            for (let i = 0; i < string.length; i++) {
              if (string[i] == ch) {
                counted += 1;
              }
            }
            return counted;
          }
          
          function countBs(string) {
            return countChar(string, "B");
          }
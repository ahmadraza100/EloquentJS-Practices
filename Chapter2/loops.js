console.log("Loops");

let age = 1  ; 
let name = "Ahmad"
let pocketmoney = 5;

for(let i=1 ; i<=10 ; i = i+1){
    
    let info = `Dear ${name} Your PocketMoney at the Age of \"${age}"\ is  = ${pocketmoney}`;
    console.log(info);
    pocketmoney = pocketmoney*2; 
    age = age+5;
     if ( age > 35)
     {
         alert("Tu mera puttr chutti ker");
         break;
     }
}
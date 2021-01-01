let name = "My name is Ahmad";

name = "My name is Ahmad\t my class is 3rd Year" ; 

name = "My name is Ahmad\n My class is 3rd Year" ; 

console.log(name);

firstName="\"Ahmad\" Raza";  
lastName=`Shafi\'s`;
 let fullName = firstName + "" + lastName;
 console.log(fullName);

 //String Methods

 console.log(fullName.repeat(2));
 console.log(fullName.indexOf("R"));
 console.log(fullName.endsWith("R"));
 console.log(fullName.includes("R"));
 console.log(fullName.lastIndexOf("a"));


 FullName = fullName.localeCompare(name);
 console.log(fullName);

 firstName="\"Ahmad\" Raza";  
lastName=`Shafi\'s`;
fullName = firstName + "" + lastName;



console.log(fullName.match("\Raza"));
console.log(fullName.replace("Ahmad" , "Emi"));
console.log(fullName.replace("Ahmad" , "Emi"));
console.log(fullName.slice(3,7));
console.log(fullName.split("S"));
console.log(fullName.split("S"));
console.log(fullName.startsWith("\"Ahmad\""));
console.log(fullName.substr(5,6));
console.log(fullName.substring(5,17));


fullName = fullName.toLocaleLowerCase();
console.log(fullName);

fullName = fullName.toLocaleUpperCase();
console.log(fullName);

fullName = firstName + "" + lastName;
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.trim());
console.log(fullName.trim());




// alert(name.anchor("ahmad"));
console.log(name.big("Class"));
console.log(name.italics("Class"));
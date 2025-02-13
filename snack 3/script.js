/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let number = [];
let thisnumber

let sum = 0

for (let i = 0 ; i < 10 ; i++){
  
 thisnumber = Number(prompt('Scegli un numero'));
  console.log(thisnumber);

  number.push(thisnumber) 
  console.log(number);

}

for (let i = 0; i < number.length; i++) {
  
  sum += thisnumber[i];  
  
} 
console.log(sum);




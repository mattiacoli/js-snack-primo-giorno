/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/


const numbOne = Number(prompt('Inserisci un numero ') )
const numbTwo = Number(prompt('Inserisci un altro numero') )

if (numbOne > numbTwo){
  alert(numbOne);
  
} else {
  alert(numbTwo);  
}
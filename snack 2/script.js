/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


const firstWord = prompt('write a word')
const secondWord = prompt('write a second word')
  
if (firstWord.length > secondWord.length){
  console.log(`${firstWord} is longer than ${secondWord}`);
  
} else  if (secondWord.length > firstWord.length) {
  console.log(`${secondWord} is longer than ${firstWord}`);
  
}


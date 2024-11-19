// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Logica: 
// - costante e prompt per inserire una parola (addWord)
// - funzione: 
//   - creare una seconda costante vuota (
// palindromeWord) = addWord.reverse()
//   - const palindomeWord = false
//   - IF palindromeWord = true; 
//   - return 'addWord è una parola palindroma'
// reverse() si usa per gli array, quindi devo trasformare la parola in un array girarla fare il controllo e ricomporla (?)

const addWord = prompt('Scrivi una parola');
console.log(addWord)
const arrayAddWord = addWord.split('').reverse().join('');
console.log(arrayAddWord);
let message;

palindrome(addWord, arrayAddWord)

function palindrome(writeWord, reversedWord) {
  let palindromeWord = false;
  if (reversedWord === writeWord) {
    palindromeWord = true;
    message = 'la parola è palindroma'
  } else {
    message = 'la parola NON è palindroma'
  }
  console.log(message);
  return palindrome
}



// let palindromeWord = false;
// if (arrayAddWord === addWord) {
//   palindromeWord = true;
//   message = 'la parola è palindroma'
// } else {
//   message = 'la parola NON è palindroma'
// }
// console.log(message)




console.log('Pari o Dispari');

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Logica: 
// - prompt per l'inserimento della parola pari o della parola dispari
// - prompt per l'inserimento di un numero da 1 a 5
// - generazione numero random per il pc
// - somma numero giocatore e numero pc
// - funzione: stabilisco se la somma è pari o dispari (%). 
// - dichiaro il vincitore 

const playerOddEven = prompt('Scegli PARI o DISPARI');
console.log(playerOddEven);
const playerNumber = prompt('Inserisci un numero compreso tra 1 e 5');
console.log('il tuo numero=', playerNumber);
const pcNumber = Math.ceil(Math.random() * 5);
console.log('il numero del pc=', pcNumber);


let oddEvenResault = false;
let message = 'hai perso';

function oddEven(playerGame, pcGame) {
  let isOddOrEven;
  const oddEvenValue = parseInt(playerGame) + parseInt(pcGame);
  isOddOrEven = `la somma è= ${parseInt(oddEvenValue)}`;
  console.log(isOddOrEven);

  if (!(oddEvenValue % 2)) {
    isOddOrEven = 'pari'
  } else {
    isOddOrEven = 'dispari'
  }
  return isOddOrEven
}

if (oddEven(playerNumber, pcNumber) === playerOddEven) {
  oddEvenResault = true;
  message = 'hai vinto';
}
console.log(message)


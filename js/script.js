console.log('JS OK');

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const userAge = parseInt(prompt('Quanti anni hai?', '69').trim());
console.log('userAge: ', userAge);

const userDistance = parseInt(prompt('Per quanti chilometri vuoi viaggiare?', '400').trim());
console.log('userDistance: ', userDistance);

let ticketPrice = userDistance * 0.21;
console.log('ticketPrice: ', ticketPrice);
// 84

if (userAge < 18) {
	ticketPrice = ticketPrice * 0.80;
	// 15 --> 67.2
} else if (userAge > 65) {
	ticketPrice = ticketPrice * 0.60;
	// 70 --> 50.4
}

console.log('Discounted ticketPrice: ', ticketPrice.toFixed(2), '€');
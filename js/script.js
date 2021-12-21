console.log('JS OK');

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const discountMessage = document.getElementById('discount');

const alertNumber = `Il valore ammesso non è un numero!
Per favore, inserire solo numeri.`;

const userAge = parseInt(prompt(`Quanti anni hai?
Solo numeri ammessi.`).trim());
console.log('userAge: ', userAge);

if (isNaN(userAge)) {
	alert(alertNumber);
	location.reload();
} else if (userAge > 120) {
	alert('Età non valida.');
	location.reload();
}

const userDistance = parseInt(prompt(`Per quanti chilometri vuoi viaggiare?
Inserire un valore espresso in KM.
Solo numeri ammessi.`).trim());
console.log('userDistance: ', userDistance);

if (isNaN(userDistance)) {
	alert(alertNumber);
	location.reload();
} else if (userDistance > 2000) {
	alert('Distanza troppo elevata.');
	location.reload();
}

let ticketPrice = userDistance * 0.21;
console.log('ticket-price: ', ticketPrice);

if (userAge < 18) {
	ticketPrice = ticketPrice * 0.80;
	discountMessage.innerText = 'Data la Sua età, è stato applicato uno sconto del 20%.'

} else if (userAge > 65) {
	ticketPrice = ticketPrice * 0.60;
	discountMessage.innerText = 'Data la Sua età, è stato applicato uno sconto del 40%.'

} else {
	discountMessage.innerText = 'Non ci sono sconti applicabili.'
}

const priceMessage = 'Il prezzo del Suo biglietto è: ' + ticketPrice.toFixed(2) + '€';
document.getElementById('ticket-price').innerText = priceMessage;
console.log('Discounted ticket-price: ', ticketPrice.toFixed(2), '€');
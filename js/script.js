//funzione per generazione di un numero casuale vedere es precedenti 'get randomnumber'
function randomNumber(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
//creo array per contenere i 5 numeri casuali con un while e un if per il controllo di un numero già inserito
var listaCasuali = [];
while (listaCasuali.length < 5) {
  var num = randomNumber(1,100);
  if(!listaCasuali.includes(num)) {
    listaCasuali.push(num);
  }
}
// mostra con un alert i 5 numeri generati
alert(listaCasuali);
// con un ciclo while all interno della funzione setTimeout mostro all utente 5 prompt un if per il controllo del numero inserito
setTimeout(function() {
  var numUtente = [];
  while (numUtente.length < 5) {
    var num = parseInt(prompt('inserisci un numero'));
    if(!numUtente.includes(num)) {
      numUtente.push(num);
    }
  }
  // creo array con un ciclo for dove controllo i numeri inseriti
  var indovinati = [];
  for (var i = 0; i < listaCasuali.length; i++) {
   if (listaCasuali.includes(numUtente[i])) {
     indovinati.push(numUtente[i]);
   }
  }
  alert(indovinati);
}, 2000);

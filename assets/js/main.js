//Chiediamo il nome 
const First_name = prompt('Inserisci il tuo nome')
console.log(First_name)


//chiediamo il cognome
const last_name = prompt('Inserisci il tuo cognome')
console.log(last_name)


//chidiamo il colore preferito 
const Color_fav = prompt('Inserisci il tuo colore preferito')
console.log(Color_fav)

const number_final = '22'

//ecco il risultato per la password 

document.getElementById('Password').innerHTML = `${First_name}${last_name}${Color_fav}${number_final}`
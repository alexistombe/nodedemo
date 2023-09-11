// ----------------------------primer ejercicio ---------------------------
let numero =[]
function insertarnumeros(nume) {
  numero.push(nume)
  return numero
}

for (let i = 0; i < 10; i++) {
  var x = parseInt(prompt("ingrese un dato: "))
  insertarnumeros(x)  
}

console.log(numero)
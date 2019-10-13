alert ("Bienvenido al Piedra-Papel o Tijera");
let jugador1= prompt("Piedra-Papel o Tijera?");
console.log(jugador1);
let jugador2= prompt("Piedra-Papel o Tijera?");
console.log(jugador2);

if (jugador1==jugador2) {
console.log("Empate")
} else if (jugador1=="piedra" && jugador2=="papel" || jugador1=="papel" && jugador2=="tijera" || jugador1=="tijera" && jugador2=="piedra") {
console.log("jugador2 gana")
alert ("jugador 2 GANA!!!")
} else {
console.log("jugador1 gana")
alert ("jugador 2 GANA!!!")
}    
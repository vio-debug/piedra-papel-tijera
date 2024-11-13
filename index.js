var jugador1 = prompt('Jugador 1 = Escoge entre : "Piedra🪨/Papel🧻/Tijeras✂️"');
var jugador2 = prompt('Jugador 2 = Escoge entre : "Piedra🪨/Papel🧻/Tijeras✂️"');


if((jugador1 !== "Piedra" && jugador1 !== "Papel" && jugador1 !== "Tijeras") || (jugador2 !== "Piedra" && jugador2 !== "Papel" && jugador2 !== "Tijeras")){

    alert("Escríbelo bien loser👎");

} else if (jugador1=="Piedra" && jugador2=="Tijeras" || jugador1=="Tijeras" && jugador2=="Papel" || jugador1=="Papel" && jugador2=="Piedra"){
   
    alert("🦕¡Jugador 1 gana!🤖");

} else if (jugador1==jugador2){

    alert("🤝¡Empate!🤝");

} else {
    
    alert("🦖¡Jugador 2 gana!🧟");

}

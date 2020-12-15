window.onload = function() {
    start();
};

var intentos = 0;
var pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var ids = [];
var state = 0;
//0 = Esperando primer carta, 1 = Esperando segunda carta
var card1 = 0; //Personaje 1
var card2 = 0; //Personaje 2
var card10 = 0; //Carta en el Tablero 1
var card20 = 0; //Carta en el Tablero 2

function start() {
    
    var cantidadNumeros = 16;
    while (ids.length < cantidadNumeros) {
        var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
        var existe = false;
        for (var i = 0; i < ids.length; i++) {
            if (ids[i] == numeroAleatorio) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            ids[ids.length] = numeroAleatorio;
        }

    }

}

function tick(n){
    let turn = false;
    if (state==0) {
        if (pos[n]==0) {
            pos[n]=1;
            flip(n);
            card1 = getValue(ids[n])
            card10 = n
            turn = true;           
        }         
    }

    if (state==1) {
        if (pos[n]==0) {
            pos[n]=1;
            flip(n);
            card2 = getValue(ids[n])
            card20 = n
            if (card1!=card2) {
                console.log("noson");
                state=3;
                setTimeout(RestartCards, 1000);
            } else {state = 0}
            card1=0;
            card2=0;
            intentos++;
            document.getElementById("ints").innerHTML = intentos + " intentos";
        }
        
    }

    if (turn==true && state==0) {
        state = 1;
    }

    var win = 1;

    for (let p = 0; p< pos.length; p++) {
        if (pos[p]==0) {
            win--;
        }
        
    }
    
    if (win==1) {
        alert("¡Ganaste con un total de " + intentos + " intentos, increible!");
    }
    
}

function RestartCards() {
    pos[card10]=0;
    pos[card20]=0;
    document.getElementById("item"+card10).src="https://rickandmortyapi.com/api/character/avatar/19.jpeg";
    document.getElementById("item"+card20).src="https://rickandmortyapi.com/api/character/avatar/19.jpeg";
    state = 0;
}

function flip(n){
    let idUsado = getValue(ids[n]);
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
        document.getElementById("item"+n).src= data.results[idUsado].image;
    })

}

function getValue(g){
    switch (g) {
        case 1:
        case 2:
            return 2;    
            break;
        case 3:
        case 4:
            return 3;    
            break;
        case 5:
        case 6:
            return 4;     
            break;
        case 7:
        case 8:
            return 5;    
            break;
        case 9:
        case 10:
            return 6;    
            break;
        case 11:
        case 12:
            return 7;    
            break;
        case 13:
        case 14:
            return 8;     
            break;
        case 15:
        case 16:
            return 9;    
            break;
    }

}

var turn = 1;
var ts1 = 0;
var ts2 = 0;
var score1 = 0;
var score2 = 0;
var state = true;
var n1 = 0;
var n2 = 0;
document.getElementById("btn2").disabled = true;

function Shuffle() {
    let dicesound = new Audio('sound/dice.wav');
    dicesound.play();
    state = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    n1 = Math.floor(Math.random() * 6) + 1;
    n2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").src="img/dice"+n1+".png";
    document.getElementById("dice2").src="img/dice"+n2+".png";
    setTimeout(Stop, 800);
    if (turn==1) {
        if (n1==n2) {        
            ts1 = 0;
            document.getElementById("ts1").innerHTML = 0;
            Shift();
        } else {
            ts1 = ts1 + (n1+n2);
            document.getElementById("ts1").innerHTML = ts1;
        }
    } else {
        if (n1==n2) {
            ts2 = 0;
            document.getElementById("ts2").innerHTML = 0;
            Shift();
        } else {
            ts2 = ts2 + (n1+n2);
            document.getElementById("ts2").innerHTML = ts2;
        }
    }
    
}


function Stop(){
    state=true;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
}

function Pass(){
    if (turn==1) {
        score1 = score1 + ts1;
        ts1=0;
        document.getElementById("ts1").innerHTML = ts1;
        document.getElementById("score1").innerHTML = score1;
    } else {
        score2 = score2 + ts2;
        ts2 = 0;
        document.getElementById("ts2").innerHTML = ts2;
        document.getElementById("score2").innerHTML = score2;
    }
    document.getElementById("btn2").disabled = true;
    if (score1>=100) {
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        alert("El ganador es el jugador 1");
    } else {
        if (score2>=100) {
            alert("El ganador es el jugador 2");
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
        } else{
            Shift();
        }
    }
    

}

function Shift(){
    if (turn==1) {
        document.getElementById("p1").style.backgroundColor = "white"
        document.getElementById("p2").style.backgroundColor = "red"
        turn = 2;
    } else {
        document.getElementById("p1").style.backgroundColor = "red"
        document.getElementById("p2").style.backgroundColor = "white"
        turn = 1;
    }
}
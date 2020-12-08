document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  playSound(keyCode);
}


function playSound(n) {

    switch (n) {
        case 1:
        case 65:
            let boom = new Audio('audio/boom.wav');
            boom.play();
            document.getElementById("bta").style.border = "1px solid yellow"
            setTimeout(boom1, 200)
            function boom1() {
                document.getElementById("bta").style.border = "1px solid black"
            }
            break;
        case 2:
        case 83:
            let clap = new Audio('audio/clap.wav');
            clap.play();
            document.getElementById("bts").style.border = "1px solid red"
            setTimeout(clap1, 200)
            function clap1() {
                document.getElementById("bts").style.border = "1px solid black"
            }
            break;
        case 3:
        case 68:
            let hihat = new Audio('audio/hihat.wav');
            hihat.play();
            document.getElementById("btd").style.border = "1px solid blue"
            setTimeout(hihat1, 200)
            function hihat1() {
                document.getElementById("btd").style.border = "1px solid black"
            }
            break;
        case 4:
        case 70:
            let kick = new Audio('audio/kick.wav');
            kick.play();
            document.getElementById("btf").style.border = "1px solid cyan"
            setTimeout(kick1, 200)
            function kick1() {
                document.getElementById("btf").style.border = "1px solid black"
            }
            break;
        case 5:
        case 71:
            let openhat = new Audio('audio/openhat.wav');
            openhat.play();
            document.getElementById("btg").style.border = "1px solid pink"
            setTimeout(openhat1, 200)
            function openhat1() {
                document.getElementById("btg").style.border = "1px solid black"
            }
            break;
        case 6:
        case 72:
            let ride = new Audio('audio/ride.wav');
            ride.play();
            document.getElementById("bth").style.border = "1px solid white"
            setTimeout(ride1, 200)
            function ride1() {
                document.getElementById("bth").style.border = "1px solid black"
            }
            break;
        case 7:
        case 74:
            let snare = new Audio('audio/snare.wav');
            snare.play();
            document.getElementById("btj").style.border = "1px solid green"
            setTimeout(snare1, 200)
            function snare1() {
                document.getElementById("btj").style.border = "1px solid black"
            }
            break;
        case 8:
        case 75:
            let tink = new Audio('audio/tink.wav');
            tink.play();
            document.getElementById("btk").style.border = "1px solid yellow"
            setTimeout(tink1, 200)
            function tink1() {
                document.getElementById("btk").style.border = "1px solid black"
            }
            break;
        case 9:
        case 76:
            let tom = new Audio('audio/tom.wav');
            tom.play();
            document.getElementById("btl").style.border = "1px solid brown"
            setTimeout(tom1, 200)
            function tom1() {
                document.getElementById("btl").style.border = "1px solid black"
            }
            break;
    }


}
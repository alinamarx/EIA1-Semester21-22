/*Soundeffects als Variablen zur Verfügung stellen*/
var soundA = new Audio('./L07/task_material/assets/A.mp3');
var soundC = new Audio('./L07/task_material/assets/C.mp3');
var soundF = new Audio('./L07/task_material/assets/F.mp3');
var soundG = new Audio('./L07/task_material/assets/G.mp3');
var hihat = new Audio('./L07/task_material/assets/hihat.mp3');
var kick = new Audio('./L07/task_material/assets/kick.mp3');
var laugh1 = new Audio('./L07/task_material/assets/laugh-1.mp3');
var laugh2 = new Audio('./L07/task_material/assets/laugh-2.mp3');
var snare = new Audio('./L07/task_material/assets/snare.mp3');
//Aufgabe 7.1
/*Abspielen der zugehörigen Sounds*/
function playSample(samples) {
    samples.play();
}
/*EventListener horcht auf Klick um Funktion auszuführen*/
window.addEventListener('load', function () {
    document.querySelector('#button1').addEventListener('click', function () {
        playSample(kick);
    });
    document.querySelector('#button2').addEventListener('click', function () {
        playSample(snare);
    });
    document.querySelector('#button3').addEventListener('click', function () {
        playSample(hihat);
    });
    document.querySelector('#button4').addEventListener('click', function () {
        playSample(soundA);
    });
    document.querySelector('#button5').addEventListener('click', function () {
        playSample(soundC);
    });
    document.querySelector('#button6').addEventListener('click', function () {
        playSample(soundF);
    });
    document.querySelector('#button7').addEventListener('click', function () {
        playSample(soundG);
    });
    document.querySelector('#button8').addEventListener('click', function () {
        playSample(laugh1);
    });
    document.querySelector('#button9').addEventListener('click', function () {
        playSample(laugh2);
    });
});
//Aufgabe 7.2
var drummachine = [kick, snare, hihat];
/*let key: number = 0
let arraylength : number = drummachine.length*/
function playBeat() {
    /*
    setInterval(function(){
        var beat: HTMLAudioELement = new Audio(drummachine [key]);
        beat.play();
        key++;
        if (key>arraylength) key = 0
    },500)
    */
    setInterval(function () {
        drummachine[2].play();
    }, 1000);
    setInterval(function () {
        drummachine[1].play();
    }, 500);
    setInterval(function () {
        drummachine[0].play();
    }, 250);
}
window.addEventListener('load', function () {
    document.querySelector('#play').addEventListener('click', playBeat);
});
//Zusatzaufgabe
window.addEventListener('load', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key == "1") {
            playSample(kick);
        }
        else if (event.key == "2") {
            playSample(snare);
        }
        else if (event.key == "3") {
            playSample(hihat);
        }
        else if (event.key == "4") {
            playSample(soundA);
        }
        else if (event.key == "5") {
            playSample(soundC);
        }
        else if (event.key == "6") {
            playSample(soundF);
        }
        else if (event.key == "7") {
            playSample(soundG);
        }
        else if (event.key == "8") {
            playSample(laugh1);
        }
        else if (event.key == "9") {
            playSample(laugh2);
        }
        else if (event.key == "0") {
            playBeat();
        }
    });
});
//# sourceMappingURL=script.js.map
/*Soundeffects als Variablen zur Verfügung stellen*/
var sound1 = new Audio('../L07/task-material/assets/A.mp3');
var sound2 = new Audio('B.mp3');
var sound3 = new Audio('F.mp3');
var sound4 = new Audio('G.mp3');
var sound5 = new Audio('hihat.mp3');
var sound6 = new Audio('kick.mp3');
var sound7 = new Audio('laugh-1.mp3');
var sound8 = new Audio('laugh-2.mp3');
var sound9 = new Audio('snare.mp3');
//in Array noch zusammenfassen
/*Abspielen der zugehörigen Sounds*/
function playSample(samples) {
    samples.play();
}
/*EventListener horcht auf Klick um Funktion auszuführen*/
window.addEventListener('load', function () {
    document.querySelector('#button1').addEventListener('click', function () {
        playSample(sound1);
    });
    document.querySelector('#button2').addEventListener('click', function () {
        playSample(sound2);
    });
    document.querySelector('#button3').addEventListener('click', function () {
        playSample(sound3);
    });
    document.querySelector('#button4').addEventListener('click', function () {
        playSample(sound4);
    });
    document.querySelector('#button5').addEventListener('click', function () {
        playSample(sound5);
    });
    document.querySelector('#button6').addEventListener('click', function () {
        playSample(sound6);
    });
    document.querySelector('#button7').addEventListener('click', function () {
        playSample(sound7);
    });
    document.querySelector('#button8').addEventListener('click', function () {
        playSample(sound8);
    });
    document.querySelector('#button9').addEventListener('click', function () {
        playSample(sound9);
    });
});
//# sourceMappingURL=script.js.map
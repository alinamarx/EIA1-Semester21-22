/*Soundeffects als Variablen zur Verfügung stellen*/
var sound1: HTMLAudioElement = new Audio ('../L07/task-material/assets/A.mp3');
var sound2: HTMLAudioElement = new Audio ('B.mp3');
var sound3: HTMLAudioElement = new Audio ('F.mp3');
var sound4: HTMLAudioElement = new Audio ('G.mp3');
var sound5: HTMLAudioElement = new Audio ('hihat.mp3');
var sound6: HTMLAudioElement = new Audio ('kick.mp3');
var sound7: HTMLAudioElement = new Audio ('laugh-1.mp3');
var sound8: HTMLAudioElement = new Audio ('laugh-2.mp3');
var sound9: HTMLAudioElement = new Audio ('snare.mp3');
//in Array noch zusammenfassen


/*Abspielen der zugehörigen Sounds*/
function playSample(samples: HTMLAudioElement){
    samples.play()
}

/*EventListener horcht auf Klick um Funktion auszuführen*/
window.addEventListener ('load', function (){
    document.querySelector('#button1').addEventListener('click',function(){
        playSample(sound1)
    });
    document.querySelector('#button2').addEventListener('click',function(){
        playSample(sound2)
    });
    document.querySelector('#button3').addEventListener('click',function(){
        playSample(sound3)
    });
    document.querySelector('#button4').addEventListener('click',function(){
        playSample(sound4)
    });
    document.querySelector('#button5').addEventListener('click',function(){
        playSample(sound5)
    });
    document.querySelector('#button6').addEventListener('click',function(){
        playSample(sound6)
    });
    document.querySelector('#button7').addEventListener('click',function(){
        playSample(sound7)
    });
    document.querySelector('#button8').addEventListener('click',function(){
        playSample(sound8)
    });
    document.querySelector('#button9').addEventListener('click',function(){
        playSample(sound9)
    });
})